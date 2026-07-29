---
title: Profils IPTV
sidebar_position: 2
---

# Profils IPTV

:::caution Fonctionnalité prévue
Les profils ne sont pas encore implémentés. Cette page décrit le comportement
cible, afin que l'implémentation reste cohérente.
:::

## Principe

Un **profil** regroupe tout ce qui concerne une source : son nom, son type
(HLS ou Xtream), ses identifiants et ses favoris. Plusieurs profils peuvent
coexister sur le même appareil (par exemple « Salon » et « Enfants »).

## Modèle de données visé

```json
{
  "id": "prof_1",
  "nom": "Salon",
  "type": "xtream",
  "serveur": "http://exemple-xtream.com:8080",
  "utilisateur": "john",
  "format": "m3u8",
  "favoris": ["chaine_12", "chaine_45"],
  "theme": "sombre"
}
```

## Règles de sécurité

- Le mot de passe n'est **jamais** stocké en clair : soit il est redemandé à
  chaque session, soit il est chiffré avec une clé dérivée d'un code utilisateur.
- Aucun profil n'est synchronisé vers un serveur : tout reste local à l'appareil
  (`localStorage` ou `IndexedDB`).
- Un bouton « Effacer toutes les données » doit permettre de tout supprimer.

## Parcours utilisateur cible

1. Premier lancement → écran « Ajouter un profil ».
2. Saisie des informations → validation par un test de lecture.
3. Le profil apparaît dans un sélecteur en haut de page ; en changer recharge les
   favoris et le thème associés.
