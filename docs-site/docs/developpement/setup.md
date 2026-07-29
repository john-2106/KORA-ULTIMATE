---
title: Setup
sidebar_position: 1
---

# Setup de développement

## Prérequis

- **Node.js 18+** et **npm** (nécessaires pour le proxy et la documentation).
- **Git**.

## 1. Cloner le dépôt

```bash
git clone https://github.com/john-2106/KORA-ULTIMATE.git
cd KORA-ULTIMATE
```

## 2. Lancer l'application

L'application est statique : aucun build n'est requis.

```bash
npx serve .
# puis ouvrir http://localhost:3000
```

Pour tester **avec le proxy Xtream** (fonction serverless) :

```bash
npm install
npx netlify dev
# l'application et /api/xtream sont servis ensemble
```

## 3. Lancer la documentation

```bash
cd docs-site
npm install
npm start
# ouvre http://localhost:3000 avec rechargement à chaud
```

Pour vérifier le rendu de production (identique à celui publié) :

```bash
npm run build
npm run serve
```

## 4. Variables d'environnement du proxy

| Variable | Obligatoire | Rôle |
| --- | --- | --- |
| `ALLOWED_HOSTS` | Recommandée | Liste d'hôtes autorisés, séparés par des virgules. Vide = tout est autorisé (déconseillé) |
| `PROXY_API_KEY` | Recommandée | Si définie, chaque requête doit fournir l'en-tête `x-proxy-key` |

En local, créez un fichier `.env` (jamais commité) :

```bash
ALLOWED_HOSTS=exemple-xtream.com,cdn.exemple.com
PROXY_API_KEY=une-valeur-longue-et-aleatoire
```

:::danger Ne commitez jamais vos identifiants
Aucun identifiant Xtream, clé d'API ou fichier `.env` ne doit être ajouté au dépôt.
:::

## Flux de contribution

1. Créez une branche : `git checkout -b feature/ma-fonctionnalite`.
2. Faites vos modifications et vérifiez-les localement.
3. Ouvrez une Pull Request vers `main`.
4. La CI construit la documentation ; une fois la PR fusionnée, le site public
   est mis à jour automatiquement.
