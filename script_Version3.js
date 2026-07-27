// Formspree handler + Player HLS/Xtream handler
document.addEventListener('DOMContentLoaded', function(){
  // Contact form handling (Formspree)
  const form = document.getElementById('contact-form');
  if(form){
    const note = form.querySelector('.form-note') || document.querySelector('.form-note');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if(!note) return;
      note.textContent = 'Envoi en cours…';
      const data = new FormData(form);
      try {
        const resp = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if(resp.ok){
          note.textContent = 'Merci — votre message a été envoyé.';
          form.reset();
        } else {
          note.textContent = 'Erreur lors de l\'envoi, veuillez réessayer.';
        }
      } catch (err) {
        note.textContent = 'Impossible de contacter le serveur. Vérifie ta connexion.';
      }
    });
  }

  // Player logic
  const streamType = document.getElementById('stream-type');
  const inputHls = document.getElementById('input-hls');
  const inputXtream = document.getElementById('input-xtream');
  const hlsUrl = document.getElementById('hls-url');
  const xtreamServer = document.getElementById('xtream-server');
  const xtreamUser = document.getElementById('xtream-user');
  const xtreamPass = document.getElementById('xtream-pass');
  const xtreamProto = document.getElementById('xtream-proto');
  const playBtn = document.getElementById('play-btn');
  const video = document.getElementById('video');
  const notePlayer = document.querySelector('#player .form-note') || document.querySelector('.form-note');

  streamType.addEventListener('change', () => {
    if(streamType.value === 'hls'){
      inputHls.style.display = 'block';
      inputXtream.style.display = 'none';
    } else {
      inputHls.style.display = 'none';
      inputXtream.style.display = 'block';
    }
  });

  playBtn.addEventListener('click', async () => {
    if(notePlayer) notePlayer.textContent = '';
    let url = '';
    if(streamType.value === 'hls'){
      url = hlsUrl.value.trim();
      if(!url){ if(notePlayer) notePlayer.textContent = 'Colle une URL HLS (m3u8).'; return; }
    } else {
      const server = xtreamServer.value.trim();
      const user = xtreamUser.value.trim();
      const pass = xtreamPass.value.trim();
      const proto = xtreamProto.value;
      if(!server || !user || !pass){ if(notePlayer) notePlayer.textContent = 'Remplis serveur, utilisateur et mot de passe.'; return; }
      url = server.replace(/\/+$/, '') + '/get.php?username=' + encodeURIComponent(user) + '&password=' + encodeURIComponent(pass) + '&type=m3u&output=' + proto;
      // Selon fournisseur, la forme exacte peut varier — en cas d'échec utilise l'URL HLS directe.
    }

    if(!url){ if(notePlayer) notePlayer.textContent = 'URL invalide.'; return; }
    if(window.hlsInstance){ try{ window.hlsInstance.destroy(); } catch(e){} window.hlsInstance = null; }
    video.pause(); video.removeAttribute('src'); video.load();

    const isM3u8 = url.indexOf('.m3u8') !== -1 || url.indexOf('type=m3u') !== -1;
    if(isM3u8 && (video.canPlayType('application/vnd.apple.mpegurl') || video.canPlayType('application/x-mpegURL'))){
      video.src = url;
      try { await video.play(); if(notePlayer) notePlayer.textContent = ''; } catch (err) { if(notePlayer) notePlayer.textContent = 'Lecture bloquée par le navigateur (interaction requise). Clique sur play.'; }
      return;
    }

    if(window.Hls && Hls.isSupported()){
      const hls = new Hls();
      window.hlsInstance = hls;
      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.ERROR, function(event, data){
        console.warn('hls error', data);
        if(notePlayer) notePlayer.textContent = 'Erreur de lecture : ' + (data && data.type ? data.type : 'inconnue') + '. Vérifie l\'URL / CORS / droits.';
      });
      try { await video.play(); if(notePlayer) notePlayer.textContent = ''; } catch(err){ if(notePlayer) notePlayer.textContent = 'Lecture bloquée (interaction requise). Clique sur play.'; }
      return;
    }

    video.src = url;
    try { await video.play(); if(notePlayer) notePlayer.textContent = ''; } catch (err) { if(notePlayer) notePlayer.textContent = 'Impossible de lire ce flux dans ce navigateur.'; }
  });
});