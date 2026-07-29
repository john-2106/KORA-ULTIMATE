KORA_ONE — Pack prêt à déployer (Standard + Player)
=================================================

📖 **Documentation technique complète : https://john-2106.github.io/KORA-ULTIMATE/**
(architecture, player HLS/Xtream, setup, déploiement, roadmap — sources dans `docs-site/`)

Ce pack contient une page statique responsive (index.html + styles + script) et un player qui accepte :
- URL HLS (.m3u8)
- Construction simple d'une URL Xtream (server + user + pass)

Important : n'utilise que des flux que tu as le droit d'utiliser.

Déploiement rapide (sans technique) — Netlify (recommandé)
1. Créer un dossier local (ex. site_kora) et coller tous les fichiers fournis dedans.
2. Zipper le dossier (clic droit → Compresser / Create archive).
3. Créer un compte gratuit sur https://app.netlify.com/ si nécessaire.
4. Dans Netlify → Sites → Add new site → Deploy manually → glisser‑déposer le contenu du zip (ou le dossier décompressé).
5. Netlify fournit une URL publique instantanée (ex: https://adoring-galileo-12345.netlify.app).

Remplacer l'endpoint du formulaire
- Crée un formulaire sur https://formspree.io/ (gratuit).
- Remplace action="https://formspree.io/f/your-form-id" dans index.html par l'URL fournie.

Test de lecture HLS (exemple public)
- Pour tester le player, colle cette URL de test dans HLS : 
  https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8

Notes sur Xtream & CORS
- Si un flux ne démarre pas, c'est souvent un problème CORS côté fournisseur. Solutions :
  - Demander au fournisseur d'autoriser ton domaine.
  - Utiliser un proxy/serverless (nécessite configuration technique).
  - Utiliser l'URL HLS directe si possible.

Après déploiement — que je fais pour toi
- Envoie‑moi l'URL publique.
- Je vérifie et corrige : HTTP headers (200/Content-Type/CSP/HSTS), Lighthouse (performance/accessibilité/SEO), et je teste le player.
- Si un flux bloque, je t'explique exactement quoi changer (ou je fournis un patch si un fichier doit être modifié).

Support
- Si tu veux l'archive ZIP prête à télécharger, dis « ZIP » et je te fournis le lien.
- Si tu veux que je t'accompagne pas‑à‑pas pendant l'upload sur Netlify, dis « guide Netlify » et je te guide en 3 étapes.
