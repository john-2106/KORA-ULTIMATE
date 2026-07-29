---
title: Roadmap
sidebar_position: 7
---

# Roadmap

## Fait

- Page statique responsive et accessible (héro, fonctionnalités, galerie, contact).
- Player HLS avec repli automatique : lecture native → `hls.js` → `video.src`.
- Construction d'URL Xtream à partir du serveur et des identifiants.
- Proxy serverless Netlify avec liste blanche d'hôtes, clé d'API et réécriture de manifeste.
- Documentation publique versionnée (ce site).

## Prochaines étapes

| Priorité | Sujet | Détail |
| --- | --- | --- |
| 1 | PWA | `manifest.webmanifest`, service worker, icônes |
| 2 | [Profils IPTV](./fonctionnalites/profils-iptv.md) | Plusieurs sources, favoris, stockage local sécurisé |
| 3 | Liste de chaînes | Analyse du M3U, recherche instantanée, filtres |
| 4 | [EPG](./fonctionnalites/epg.md) | XMLTV, bandeau « en cours », grille horaire |
| 5 | Thèmes | Bascule clair / sombre persistée par profil |
| 6 | [Desktop](./deploiement/desktop.md) | Enveloppe Tauri, binaires publiés en Releases |
| 7 | [Mobile](./deploiement/mobile.md) | PWA installable, puis Capacitor si nécessaire |
| 8 | Tests automatisés | Tests unitaires sur la construction d'URL, test de bout en bout du player |

## Plus tard

- Monorepo (Turborepo) le jour où web, desktop et mobile partagent des paquets.
- Reprise de lecture (« continuer où j'en étais »).
- Navigation à la télécommande pour les écrans de télévision.
