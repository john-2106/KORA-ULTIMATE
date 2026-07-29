---
title: EPG (guide des programmes)
sidebar_position: 3
---

# EPG — guide des programmes

:::caution Fonctionnalité prévue
L'EPG n'est pas encore implémenté. Cette page fixe le cadre technique.
:::

## Source de données

Le format standard est **XMLTV** : un fichier XML contenant des `<channel>` et
des `<programme>` horodatés. La plupart des fournisseurs Xtream exposent une URL
du type :

```text
{server}/xmltv.php?username={user}&password={pass}
```

## Traitement prévu

1. Téléchargement du XMLTV (via le proxy si le CORS bloque).
2. Analyse en flux (streaming parser) pour éviter de charger plusieurs Mo en mémoire.
3. Indexation par identifiant de chaîne, puis par plage horaire.
4. Mise en cache locale avec une durée de validité (par exemple 6 heures).

## Affichage cible

- Bandeau « en cours / à suivre » sous le player.
- Grille horaire défilante, navigable au clavier et à la télécommande.
- Recherche par titre de programme.

## Points de vigilance

- Les fuseaux horaires XMLTV sont exprimés avec un décalage (`+0200`) : convertir
  systématiquement en heure locale.
- Les identifiants de chaîne du XMLTV ne correspondent pas toujours à ceux de la
  liste M3U : prévoir une table de correspondance modifiable par l'utilisateur.
