---
title: Plateformes
sidebar_position: 3
---

# Plateformes supportées

| Plateforme | Technologie | Statut | Notes |
| --- | --- | --- | --- |
| Web / PWA | HTML + CSS + JavaScript, `hls.js` | ✅ Disponible | Cible principale, installable depuis le navigateur |
| Desktop (Windows, macOS, Linux) | Enveloppe Electron / Tauri autour du cœur web | 🚧 Prévu | Réutilise le même code que la PWA |
| Mobile (Android, iOS) | PWA installable, puis enveloppe native | 🚧 Prévu | Lecture HLS native sur iOS via Safari |
| TV / grand écran | Navigateur du téléviseur | 🔬 Exploratoire | Navigation à la télécommande à concevoir |

## Compatibilité navigateurs

| Navigateur | Lecture HLS | Remarque |
| --- | --- | --- |
| Chrome / Edge / Brave | via `hls.js` | Media Source Extensions requis |
| Firefox | via `hls.js` | — |
| Safari (macOS, iOS) | native | `video.canPlayType('application/vnd.apple.mpegurl')` |
| Navigateurs anciens sans MSE | ❌ | Message d'erreur explicite affiché à l'utilisateur |

## Contraintes connues

- **CORS** : beaucoup de fournisseurs n'autorisent pas les requêtes cross-origin.
  Le [proxy Xtream](../architecture/modules.md#3-proxy-engine-serverless) sert à contourner ce blocage.
- **Lecture automatique** : les navigateurs bloquent la lecture sans interaction
  utilisateur ; l'application affiche alors « Cliquez sur play ».
