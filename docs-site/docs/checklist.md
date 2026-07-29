---
title: Checklist
sidebar_position: 8
---

# Checklist

## Avant chaque mise en ligne

- [ ] `cd docs-site && npm run build` passe sans erreur ni lien cassé.
- [ ] Le player lit le flux de test `https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8`.
- [ ] Les messages d'erreur s'affichent correctement (URL vide, champs Xtream manquants).
- [ ] L'affichage est correct en 360 px, 768 px et 1440 px.
- [ ] Navigation clavier complète, lien « Aller au contenu » fonctionnel.
- [ ] Aucun identifiant, `.env` ou clé d'API dans le diff.

## Configuration à faire une fois

- [ ] Netlify : `ALLOWED_HOSTS` et `PROXY_API_KEY` renseignés.
- [ ] `index.html` : remplacer `formspree.io/f/your-form-id` par le vrai identifiant.
- [ ] `index.html` : remplacer `"url": "https://example.com"` du bloc JSON-LD par l'URL réelle.
- [ ] GitHub : **Settings → Pages → Source : GitHub Actions**.

## Dette technique identifiée

- [ ] Archiver les nombreux fichiers `.docx` de travail à la racine du dépôt.
- [ ] Supprimer ou fusionner les variantes `*_Version3.*` (`index`, `script`, `styles`).
- [ ] Ajouter une licence explicite (MIT) à la racine.
- [ ] Ajouter des tests automatisés sur la construction d'URL Xtream.
