---
title: Objectifs
sidebar_position: 1
---

# Objectifs

KORA ONE veut offrir **une seule application** pour regarder ses contenus média,
quel que soit l'appareil, sans dépendre d'un lecteur propriétaire.

## Objectifs produit

1. **Lecture universelle** — accepter les sources les plus courantes : URL HLS
   (`.m3u8`) directes et comptes Xtream (serveur + utilisateur + mot de passe).
2. **Zéro installation obligatoire** — le web (PWA) reste la cible principale ;
   les versions desktop et mobile réutilisent le même cœur applicatif.
3. **Rapidité perçue** — démarrage du lecteur en moins de 3 secondes sur une
   connexion correcte, recherche instantanée dans les listes de chaînes.
4. **Personnalisation** — thèmes (clair, sombre), profils multiples, favoris.
5. **Respect des droits** — l'application ne fournit **aucun** contenu ; elle lit
   uniquement les flux que l'utilisateur a le droit d'utiliser.

## Objectifs techniques

| Objectif | Indicateur visé |
| --- | --- |
| Performance | Score Lighthouse Performance ≥ 90 sur la page d'accueil |
| Accessibilité | Score Lighthouse Accessibilité ≥ 95, navigation clavier complète |
| Portabilité | Un seul cœur de code partagé entre web, desktop et mobile |
| Sécurité | Aucun identifiant Xtream stocké en clair côté serveur |
| Maintenabilité | Documentation versionnée avec le code, revue par Pull Request |

## Non-objectifs

- Pas de catalogue de contenus, pas d'hébergement de flux.
- Pas de compte utilisateur centralisé : les profils restent locaux à l'appareil.
- Pas de monétisation — le projet est personnel et non commercial.
