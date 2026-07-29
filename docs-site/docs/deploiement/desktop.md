---
title: Desktop
sidebar_position: 3
---

# Déploiement desktop

:::caution Prévu
La version desktop n'est pas encore réalisée. Voici le plan retenu.
:::

## Principe

Le desktop encapsule la même application web dans une fenêtre native. Aucun code
métier n'est dupliqué : le player, le provider et l'UI restent ceux du web.

## Choix d'enveloppe

| Solution | Avantages | Inconvénients |
| --- | --- | --- |
| [Tauri](https://tauri.app/) | Binaire léger (quelques Mo), sécurisé | Nécessite la chaîne d'outils Rust |
| [Electron](https://www.electronjs.org/) | Écosystème mature, Node intégré | Binaire lourd (~100 Mo) |

**Recommandation : Tauri**, car l'application est légère et n'a pas besoin de Node
au runtime.

## Ce que l'enveloppe apporte

- Contournement natif du CORS (les requêtes partent du processus natif, pas du
  navigateur) : le proxy serverless devient optionnel.
- Raccourcis clavier globaux (lecture / pause).
- Stockage local des profils dans le dossier utilisateur.

## Étapes de mise en œuvre

1. Initialiser Tauri en pointant `distDir` vers la racine du site statique.
2. Déclarer la liste blanche des domaines autorisés dans la configuration Tauri.
3. Construire les binaires Windows, macOS et Linux via GitHub Actions.
4. Publier les binaires dans les *Releases* GitHub.
