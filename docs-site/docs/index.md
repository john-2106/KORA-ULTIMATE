---
id: accueil
title: KORA ONE — Documentation technique
sidebar_label: Accueil
sidebar_position: 1
slug: /
---

# KORA ONE — Documentation technique

Bienvenue dans la documentation officielle de **KORA ONE**, un assistant média
personnel : lecture de flux HLS / Xtream, recherche rapide, thèmes personnalisés,
disponible sur le web (PWA), sur ordinateur et sur mobile.

:::info Projet personnel
KORA ONE est un projet **personnel et non commercial**. La documentation est
publique afin que n'importe quel développeur puisse la consulter, comprendre
l'architecture et contribuer.
:::

## Par où commencer ?

| Vous êtes… | Commencez par |
| --- | --- |
| Curieux du projet | [Objectifs](./introduction/objectifs.md) et [Public cible](./introduction/public-cible.md) |
| Développeur qui veut lancer le projet | [Setup de développement](./developpement/setup.md) |
| Développeur qui veut comprendre le code | [Architecture](./architecture/vue-densemble.md) |
| Prêt à mettre en ligne | [Déploiement](./deploiement/web-pwa.md) |

## Aperçu en une minute

- **Player** — lecture de flux `.m3u8` (HLS) via [hls.js](https://github.com/video-dev/hls.js),
  ou construction d'une URL Xtream à partir d'un serveur, d'un identifiant et d'un mot de passe.
- **Proxy Xtream** — une fonction serverless (Netlify) qui contourne les blocages
  CORS des fournisseurs, avec liste blanche d'hôtes et clé d'API.
- **Interface** — page responsive, accessible (liens d'évitement, rôles ARIA),
  thème clair / sombre.
- **Déploiement** — hébergement statique (Netlify, GitHub Pages) + fonctions serverless.

## Statut de la documentation

Cette documentation est versionnée avec le code : chaque modification passe par
une Pull Request, et le site est reconstruit automatiquement à chaque `push` sur
la branche `main`.
