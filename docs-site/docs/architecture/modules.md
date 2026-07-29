---
title: Modules
sidebar_position: 2
---

# Modules

## 1. Provider Engine

Responsable de la **résolution d'une source** en URL lisible.

| Entrée | Traitement | Sortie |
| --- | --- | --- |
| URL `.m3u8` | validation, nettoyage | URL identique |
| Compte Xtream | `server` + `username` + `password` + `output` | `…/get.php?username=…&password=…&type=m3u&output=m3u8` |

Points d'attention :

- Les barres obliques finales du serveur sont supprimées (`replace(/\/+$/, '')`).
- Les identifiants sont encodés avec `encodeURIComponent`.
- La forme exacte de l'API varie selon les fournisseurs : en cas d'échec,
  l'utilisateur peut toujours coller une URL HLS directe.

## 2. Player Engine

Encapsule la lecture vidéo et la gestion des erreurs.

Stratégie, dans l'ordre :

1. **Lecture native** si le navigateur annonce le support HLS (Safari, iOS).
2. **`hls.js`** si `Hls.isSupported()` renvoie `true`.
3. **Affectation directe** de `video.src` en dernier recours.

Avant chaque nouvelle lecture, l'instance `hls.js` précédente est détruite et
l'élément `<video>` est réinitialisé, pour éviter les fuites mémoire.

Les erreurs `Hls.Events.ERROR` sont traduites en messages compréhensibles
(« Vérifie l'URL / CORS / droits »).

## 3. Proxy Engine (serverless)

Fonction Netlify exposée via `/api/xtream` (redirection définie dans `netlify.toml`).

Fonctionnalités :

- **Modes d'authentification** : `urlparams`, `basic`, `token`, `none`.
- **Liste blanche d'hôtes** via la variable d'environnement `ALLOWED_HOSTS`
  (protection contre le SSRF).
- **Clé d'API optionnelle** via `PROXY_API_KEY`, vérifiée dans l'en-tête `x-proxy-key`.
- **Réécriture de manifeste** : avec `rewrite=true`, toutes les URL absolues du
  `.m3u8` sont réécrites pour repasser par le proxy.

:::warning Limite connue
Les fonctions serverless renvoient le corps en texte : la diffusion de segments
binaires volumineux n'est pas adaptée. Le proxy sert avant tout aux manifestes et
aux appels d'API, pas au transport vidéo continu.
:::

## 4. UI

- Page unique responsive : en-tête, héro, fonctionnalités, galerie, player, contact.
- Accessibilité : lien d'évitement, rôles `banner` / `navigation` / `contentinfo`,
  libellés `<label for>` sur tous les champs, zones `aria-live` pour les messages.
- Formulaire de contact envoyé à [Formspree](https://formspree.io/) en `fetch`
  asynchrone, avec retour visuel.

## 5. EPG (guide des programmes) — prévu

Objectif : consommer un fichier XMLTV, l'indexer par chaîne et afficher la grille
en cours. Non implémenté à ce jour ; voir la [Roadmap](../roadmap.md).
