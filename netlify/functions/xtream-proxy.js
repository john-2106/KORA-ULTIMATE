// Netlify Function: netlify/functions/xtream-proxy.js
// Dépendances: aucune obligatoire si Node 18+, mais si besoin installe node-fetch
const { URL } = require('url');

exports.handler = async function(event, context) {
  try {
    // Sécurité simple : requêtes POST JSON recommandées
    const method = event.httpMethod;
    let params = {};
    if (method === 'POST') {
      params = event.body ? JSON.parse(event.body) : {};
    } else {
      // GET : lecture des query params
      const qp = event.queryStringParameters || {};
      params = Object.assign({}, qp);
    }

    // API key check (optionnel mais recommandé)
    const requiredKey = process.env.PROXY_API_KEY;
    if (requiredKey) {
      const incoming = event.headers['x-proxy-key'] || event.headers['X-Proxy-Key'];
      if (!incoming || incoming !== requiredKey) {
        return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized' }) };
      }
    }

    const upstreamUrl = params.url || params.path;
    if (!upstreamUrl) return { statusCode: 400, body: JSON.stringify({ error: 'Missing url' }) };

    // Whitelist hosts to prevent SSRF
    const ALLOWED_HOSTS = (process.env.ALLOWED_HOSTS || '').split(',').map(s=>s.trim()).filter(Boolean);
    try {
      const host = new URL(upstreamUrl).hostname;
      if (ALLOWED_HOSTS.length && !ALLOWED_HOSTS.includes(host)) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Host not allowed' }) };
      }
    } catch {
      return { statusCode: 400, body: JSON.stringify({ error: 'Invalid url' }) };
    }

    // Build fetch options & auth modes
    const mode = (params.mode || 'urlparams').toLowerCase(); // urlparams | basic | token | none
    let fetchUrl = upstreamUrl;
    const fetchInit = { method: method, headers: {} };

    if (mode === 'urlparams') {
      const u = new URL(fetchUrl);
      if (params.username) u.searchParams.set('username', params.username);
      if (params.password) u.searchParams.set('password', params.password);
      fetchUrl = u.toString();
    } else if (mode === 'basic') {
      if (!params.username || !params.password) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Missing username/password for basic mode' }) };
      }
      const basic = 'Basic ' + Buffer.from(`${params.username}:${params.password}`).toString('base64');
      fetchInit.headers['Authorization'] = basic;
    } else if (mode === 'token') {
      if (!params.token) return { statusCode: 400, body: JSON.stringify({ error: 'Missing token' }) };
      fetchInit.headers['Authorization'] = 'Bearer ' + params.token;
    }

    // Forward some helpful headers
    ['user-agent','accept','range','referer','origin'].forEach(h => {
      if (event.headers[h]) fetchInit.headers[h] = event.headers[h];
    });

    // Use global fetch (Netlify Node 18+), fallback to node-fetch if necessary
    const _fetch = global.fetch || (await import('node-fetch')).default;
    const upstreamResp = await _fetch(fetchUrl, fetchInit);

    // Read content-type
    const contentType = upstreamResp.headers.get('content-type') || '';
    const wantRewrite = params.rewrite === true || params.rewrite === 'true';

    // If M3U8 and rewrite requested -> rewrite absolute URLs to call back the proxy
    if (wantRewrite && (contentType.includes('mpegurl') || fetchUrl.endsWith('.m3u8'))) {
      const text = await upstreamResp.text();
      const origin = (event.headers['x-forwarded-proto'] || 'https') + '://' + (event.headers['host'] || '');
      const proxyPrefix = `${origin}/api/xtream?rewrite=false&url=`;
      const rewritten = text.replace(/https?:\/\/[^\s'\"]+/g, m => proxyPrefix + encodeURIComponent(m));
      return {
        statusCode: upstreamResp.status,
        headers: { 'Content-Type': 'application/vnd.apple.mpegurl' },
        body: rewritten
      };
    }

    // Otherwise return body (as text). Binary streaming has limits on Netlify functions.
    const bodyText = await upstreamResp.text();
    // Forward some headers
    const headersOut = { 'Content-Type': contentType };
    return { statusCode: upstreamResp.status, headers: headersOut, body: bodyText };

  } catch (err) {
    console.error('Proxy error', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Proxy error', detail: err.message }) };
  }
};
