# Documentation KORA ONE

Site de documentation construit avec [Docusaurus](https://docusaurus.io/) et
publié sur GitHub Pages : <https://john-2106.github.io/KORA-ULTIMATE/>

## Développement local

```bash
npm install
npm start      # http://localhost:3000 avec rechargement à chaud
```

## Build de production

```bash
npm run build  # échoue si un lien interne est cassé
npm run serve  # sert le dossier build/
```

Le contenu se trouve dans `docs/`. La publication est automatique à chaque
`push` sur `main` via `.github/workflows/deploy-docs.yml`.
