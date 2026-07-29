---
title: Documentation (GitHub Pages)
sidebar_position: 2
---

# Déploiement de la documentation

Ce site est construit avec Docusaurus et publié automatiquement sur **GitHub Pages**.

## Fonctionnement

Le workflow `.github/workflows/deploy-docs.yml` :

1. se déclenche à chaque `push` sur `main` touchant `docs-site/`
   (et peut être lancé à la main via *Run workflow*) ;
2. installe les dépendances puis exécute `npm run build` dans `docs-site/` ;
3. publie le dossier `docs-site/build` sur GitHub Pages.

Sur une Pull Request, le workflow **construit sans publier** : un lien cassé ou
une erreur de syntaxe fait échouer la CI avant la fusion.

## Activation (une seule fois)

Dans le dépôt GitHub : **Settings → Pages → Build and deployment → Source :
GitHub Actions**.

L'URL publique est ensuite :

```text
https://john-2106.github.io/KORA-ULTIMATE/
```

## Modifier le contenu

Sans installer quoi que ce soit : ouvrir le fichier `.md` concerné sur GitHub,
cliquer sur le crayon, modifier, puis « Propose changes ». Le site se met à jour
après fusion.

En local : voir [Setup](../developpement/setup.md).

## Domaine personnalisé (optionnel)

1. Ajouter un fichier `docs-site/static/CNAME` contenant le domaine.
2. Configurer un enregistrement DNS `CNAME` vers `john-2106.github.io`.
3. Mettre à jour `url` et `baseUrl` dans `docs-site/docusaurus.config.js`.
