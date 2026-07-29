---
title: Tests
sidebar_position: 3
---

# Tests et vérifications

Le projet n'a pas encore de suite de tests automatisés pour l'application. En
attendant, voici la procédure de validation manuelle à suivre avant chaque Pull
Request, ainsi que les vérifications déjà automatisées.

## Vérifications automatisées

| Vérification | Commande | Où |
| --- | --- | --- |
| Build de la documentation (liens cassés inclus) | `cd docs-site && npm run build` | GitHub Actions, à chaque PR |

## Checklist manuelle du player

| Cas | Étapes | Résultat attendu |
| --- | --- | --- |
| HLS valide | Coller `https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8` puis « Lire » | La vidéo démarre |
| URL vide | Cliquer « Lire » sans rien saisir | Message « Colle une URL HLS (m3u8). » |
| Xtream incomplet | Laisser un champ vide, cliquer « Lire » | Message « Remplis serveur, utilisateur et mot de passe. » |
| Flux bloqué (CORS) | Utiliser une URL non autorisée | Message d'erreur explicite, pas de page figée |
| Changement de flux | Lire un flux, puis en lire un autre | L'ancienne instance est détruite, pas de double son |

## Checklist manuelle de l'interface

- Navigation complète au clavier (`Tab`), lien « Aller au contenu » fonctionnel.
- Affichage correct en 360 px, 768 px et 1440 px de large.
- Formulaire de contact : message de confirmation après envoi.

## Qualité web

Lancer Lighthouse (onglet *Lighthouse* des DevTools Chrome) sur la page déployée :

| Catégorie | Cible |
| --- | --- |
| Performance | ≥ 90 |
| Accessibilité | ≥ 95 |
| Bonnes pratiques | ≥ 90 |
| SEO | ≥ 90 |
