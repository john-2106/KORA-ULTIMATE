---
title: Vue d'ensemble
sidebar_position: 1
---

# Vue d'ensemble de l'architecture

KORA ONE est découpé en **quatre couches** indépendantes. Chaque couche peut être
remplacée sans réécrire les autres.

```text
┌──────────────────────────────────────────────┐
│  UI  (pages, thèmes, navigation)             │
├──────────────────────────────────────────────┤
│  Player Engine  (hls.js, lecture native)     │
├──────────────────────────────────────────────┤
│  Provider Engine  (HLS direct, Xtream, EPG)  │
├──────────────────────────────────────────────┤
│  Proxy Engine  (fonction serverless, CORS)   │
└──────────────────────────────────────────────┘
```

## Flux d'une lecture

1. L'utilisateur choisit un **type de flux** (HLS direct ou Xtream) dans l'UI.
2. Le **Provider Engine** construit l'URL finale.
   - HLS : l'URL est utilisée telle quelle.
   - Xtream : `server/get.php?username=…&password=…&type=m3u&output=m3u8`.
3. Le **Player Engine** teste d'abord la lecture HLS native
   (`canPlayType('application/vnd.apple.mpegurl')`), puis retombe sur `hls.js`.
4. Si le fournisseur bloque le navigateur (CORS), l'URL est passée au
   **Proxy Engine**, qui relaie la requête côté serveur et peut réécrire le
   manifeste `.m3u8` pour que les segments passent aussi par le proxy.
5. Les erreurs remontent dans une zone `aria-live` pour rester accessibles.

## Principes de conception

- **Aucun secret côté client persistant.** Les identifiants Xtream restent en
  mémoire ; ils ne sont ni journalisés ni envoyés ailleurs que vers le
  fournisseur choisi.
- **Dégradation progressive.** Sans `hls.js`, sans MSE ou sans JavaScript, la
  page reste lisible et affiche un message clair.
- **Un seul cœur, plusieurs enveloppes.** Le web est la source de vérité ; le
  desktop et le mobile encapsulent ce même cœur.
