---
title: Web (PWA)
sidebar_position: 1
---

# Déploiement web

## Option A — Netlify (recommandée, sans ligne de commande)

1. Créer un compte gratuit sur [netlify.com](https://app.netlify.com/).
2. **Add new site → Import from Git → GitHub**, puis choisir le dépôt.
3. Laisser la commande de build vide ; le dossier publié est la racine.
4. Netlify fournit une URL publique immédiate
   (par exemple `https://kora-one.netlify.app`).

### Activer le proxy Xtream

Le fichier `netlify.toml` redirige déjà `/api/xtream` vers la fonction
`xtream-proxy`. Dans **Site settings → Environment variables**, ajouter :

| Variable | Exemple |
| --- | --- |
| `ALLOWED_HOSTS` | `exemple-xtream.com,cdn.exemple.com` |
| `PROXY_API_KEY` | une chaîne aléatoire longue |

:::warning
Sans `ALLOWED_HOSTS`, le proxy accepte n'importe quelle destination : il peut
être utilisé par des tiers comme relais ouvert. Renseignez toujours cette variable.
:::

## Option B — Glisser-déposer

1. Zipper le dossier contenant `index.html`, `styles.css`, `script.js`.
2. Sur Netlify : **Sites → Add new site → Deploy manually**, puis déposer le dossier.

Cette option ne déploie pas les fonctions serverless.

## Après déploiement

- Remplacer `action="https://formspree.io/f/your-form-id"` dans `index.html` par
  l'URL réelle du formulaire Formspree.
- Vérifier les en-têtes HTTP (statut 200, `Content-Type`).
- Lancer un audit Lighthouse (voir [Tests](../developpement/tests.md)).
- Tester le player avec le flux public de test.

## Vers une vraie PWA

Étapes restantes pour rendre l'application installable :

1. Ajouter un `manifest.webmanifest` (nom, icônes 192/512 px, `display: standalone`,
   `theme_color: #2563eb`).
2. Enregistrer un service worker qui met en cache la coquille de l'application.
3. Servir le site en HTTPS (déjà le cas sur Netlify et GitHub Pages).
