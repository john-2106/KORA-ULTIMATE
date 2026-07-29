---
title: Design System
sidebar_position: 4
---

# Design System

## Couleurs

| Rôle | Valeur | Usage |
| --- | --- | --- |
| Primaire | `#2563eb` | Boutons d'action, logo, `theme-color` |
| Fond clair | `#ffffff` | Fond de page |
| Fond neutre | `#f3f4f6` | Illustrations, blocs secondaires |
| Fond vidéo | `#000000` | Zone du lecteur |
| Texte secondaire | classe `.muted` | Aides et avertissements |

## Typographie

Pile système : `Segoe UI, Roboto, Arial, sans-serif` — aucun téléchargement de
police, donc aucun décalage de rendu au chargement.

| Niveau | Usage |
| --- | --- |
| `h1` | Titre du héro, un seul par page |
| `h2` | Titre de section (`Fonctionnalités`, `Player`, `Contact`) |
| `h3` | Titre de carte dans une grille |

## Composants

| Composant | Classe / sélecteur | Notes |
| --- | --- | --- |
| Conteneur centré | `.wrap` | Largeur maximale commune à toutes les sections |
| Grille de cartes | `.grid-3` | 3 colonnes en desktop, empilées en mobile |
| Bouton principal | `.btn`, `.cta` | Fond primaire, texte blanc |
| Bouton secondaire | `.secondary` | Contour, fond transparent |
| Message d'état | `.form-note` | `aria-live="polite"`, vidé avant chaque action |
| Texte d'aide | `.muted` | Contraste réduit, jamais porteur d'information critique seule |

## Règles d'accessibilité

- Lien d'évitement `.skip-link` en premier élément du `<body>`.
- Rôles de repère : `banner`, `navigation`, `main`, `contentinfo`.
- Chaque champ possède un `<label for>` explicite.
- Les images décoratives sont marquées `aria-hidden="true"`.
- Contraste minimal AA (4.5:1) pour tout texte porteur d'information.
