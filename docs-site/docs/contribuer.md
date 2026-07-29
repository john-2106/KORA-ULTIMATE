---
title: Contribuer
sidebar_position: 9
---

# Contribuer

Les contributions sont les bienvenues, même une simple correction de faute.

## Sans installer quoi que ce soit

1. Ouvrir la page concernée sur ce site, cliquer sur **« Modifier cette page »**
   en bas du contenu.
2. Modifier le texte directement sur GitHub, puis « Propose changes ».
3. Une Pull Request est créée automatiquement.

## Avec un environnement local

```bash
git clone https://github.com/john-2106/KORA-ULTIMATE.git
cd KORA-ULTIMATE
git checkout -b feature/ma-fonctionnalite
# … modifications …
git commit -m "docs: corrige la section player"
git push origin feature/ma-fonctionnalite
```

Puis ouvrir une Pull Request vers `main`.

## Règles

- Une Pull Request = un sujet.
- Vérifier que `cd docs-site && npm run build` passe avant de pousser.
- Messages de commit en français ou en anglais, préfixés par `docs:`, `fix:` ou `feat:`.
- Ne jamais inclure d'identifiants, de mots de passe ou de fichiers `.env`.

## Licence

MIT © [John Kalombo](https://github.com/john-2106)
