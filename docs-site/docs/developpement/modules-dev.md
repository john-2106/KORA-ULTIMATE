---
title: Travailler sur les modules
sidebar_position: 2
---

# Travailler sur les modules

## Modifier le player

Tout se passe dans `script.js`, dans le bloc `DOMContentLoaded`.

Points d'entrée utiles :

| Élément | Identifiant HTML |
| --- | --- |
| Sélecteur de type de flux | `stream-type` |
| Champ URL HLS | `hls-url` |
| Champs Xtream | `xtream-server`, `xtream-user`, `xtream-pass`, `xtream-proto` |
| Bouton de lecture | `play-btn` |
| Élément vidéo | `video` |
| Zone de message | `.form-note` (dans `#player`) |

Règles à respecter :

- Toujours détruire l'instance `hls.js` existante avant d'en créer une nouvelle.
- Toujours écrire les erreurs dans la zone `.form-note` (elle est `aria-live`).
- Ne jamais journaliser les identifiants Xtream (`console.log`) .

## Ajouter un nouveau fournisseur

1. Ajoutez une option dans le `<select id="stream-type">` de `index.html`.
2. Ajoutez le bloc de champs correspondant, masqué par défaut.
3. Dans `script.js`, étendez la construction d'URL avec une nouvelle branche.
4. Documentez le format d'URL dans [Modules](../architecture/modules.md).

## Modifier le proxy

Le fichier est `netlify/functions/xtream-proxy.js`.

- Toute nouvelle destination doit rester soumise à `ALLOWED_HOSTS`.
- Renvoyez des codes HTTP explicites (`400` requête invalide, `401` clé absente,
  `500` erreur interne) avec un corps JSON `{ "error": "…" }`.

## Modifier la documentation

- Un fichier Markdown par page dans `docs-site/docs/`.
- L'ordre de la barre latérale vient du champ `sidebar_position` et des fichiers
  `_category_.json`.
- Les liens internes utilisent des chemins relatifs vers les fichiers `.md` :
  Docusaurus échoue au build si un lien est cassé.
