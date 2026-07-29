---
title: Structure du projet
sidebar_position: 4
---

# Structure du projet

```text
KORA-ULTIMATE/
├── index.html              # Page de l'application (héro, features, player, contact)
├── styles.css              # Feuille de style responsive
├── script.js               # Formulaire de contact + logique du player HLS / Xtream
├── netlify.toml            # Redirection /api/xtream → fonction serverless
├── netlify/
│   └── functions/
│       └── xtream-proxy.js # Proxy CORS avec liste blanche d'hôtes
├── package.json            # Dépendances du proxy (netlify dev)
└── docs-site/              # Cette documentation (Docusaurus)
    ├── docs/               # Contenu Markdown
    ├── src/                # Page d'accueil et styles du site de docs
    ├── static/             # Fichiers servis tels quels
    └── docusaurus.config.js
```

## Fichiers `_Version3`

Le dépôt contient des variantes historiques (`index_Version3.html`,
`script_Version3.js`, `styles_Version3.css`) ainsi que de nombreux `.docx` de
travail. Ils ne sont pas utilisés par le site déployé et pourront être archivés :
voir la [Checklist](../checklist.md).

## Conventions

- Un module = un rôle clair (voir [Modules](./modules.md)).
- Les messages destinés à l'utilisateur sont **en français**.
- Les identifiants HTML utilisés par `script.js` (`hls-url`, `xtream-server`,
  `play-btn`, `video`…) font partie du contrat entre l'UI et le player : les
  renommer impose de mettre à jour les deux fichiers.
