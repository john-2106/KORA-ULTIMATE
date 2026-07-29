---
title: Mobile
sidebar_position: 4
---

# Déploiement mobile

:::caution Prévu
La version mobile n'est pas encore réalisée. Voici le plan retenu.
:::

## Étape 1 — PWA installable (le plus rapide)

Une fois le `manifest.webmanifest` et le service worker en place
(voir [Web / PWA](./web-pwa.md)), l'application s'installe depuis le navigateur :

- **Android / Chrome** : menu → « Installer l'application ».
- **iOS / Safari** : Partager → « Sur l'écran d'accueil ».

C'est suffisant pour un usage personnel et ne demande aucun compte développeur.

## Étape 2 — Enveloppe native (optionnelle)

| Solution | Quand la choisir |
| --- | --- |
| [Capacitor](https://capacitorjs.com/) | Réutiliser le web tout en accédant aux API natives |
| Application native | Seulement si la lecture doit passer par ExoPlayer / AVPlayer |

## Spécificités mobiles

- **iOS** lit le HLS nativement : `hls.js` n'est pas chargé, la lecture passe par
  `video.src`.
- **Lecture en arrière-plan** et **Picture-in-Picture** nécessitent une enveloppe
  native sur iOS.
- **Réseau mobile** : prévoir un avertissement avant de démarrer un flux en
  haute définition hors Wi-Fi.
- **Écrans tactiles** : cibles d'au moins 44 × 44 px pour les contrôles.

## Publication sur les stores

Non prévue : le projet est personnel et non commercial. L'installation PWA ou un
APK distribué directement suffisent.
