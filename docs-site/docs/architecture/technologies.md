---
title: Technologies
sidebar_position: 3
---

# Technologies

| Domaine | Choix | Pourquoi |
| --- | --- | --- |
| Interface | HTML + CSS + JavaScript natifs | Aucun build nécessaire, chargement immédiat, hébergement statique partout |
| Lecture vidéo | [`hls.js`](https://github.com/video-dev/hls.js) 1.4 (CDN jsDelivr) | Support HLS sur les navigateurs sans lecture native |
| Serverless | Netlify Functions (Node 18+) | Contourne le CORS sans serveur à administrer |
| Formulaires | [Formspree](https://formspree.io/) | Réception d'e-mails sans backend |
| Documentation | [Docusaurus](https://docusaurus.io/) 3 | Recherche, versioning, déploiement GitHub Pages |
| CI / CD | GitHub Actions | Build et publication automatiques de la documentation |
| Hébergement app | Netlify | Déploiement par glisser-déposer ou via Git |

## Versions de référence

- **Node.js** : 18 ou supérieur (requis par les fonctions Netlify et par Docusaurus).
- **hls.js** : `1.4.0`, chargé depuis `https://cdn.jsdelivr.net/npm/hls.js@1.4.0/dist/hls.min.js`.
- **Docusaurus** : `3.8.1`.

## Pourquoi pas un framework côté client ?

Le cœur de KORA ONE tient en trois fichiers (`index.html`, `styles.css`,
`script.js`). Un framework ajouterait une étape de build, un temps de démarrage
et une dette de mise à jour sans bénéfice à cette taille. Le jour où plusieurs
plateformes partageront du code, un monorepo (par exemple
[Turborepo](https://turborepo.org/)) pourra être introduit — voir la
[Roadmap](../roadmap.md).
