---
title: Player
sidebar_position: 1
---

# Player

Le player accepte deux types de sources.

## HLS / M3U8 (URL directe)

1. Sélectionner « HLS / M3U8 (URL directe) ».
2. Coller l'URL du flux, par exemple le flux de test public :
   `https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8`
3. Cliquer sur **Lire**.

## Xtream (serveur + utilisateur + mot de passe)

1. Sélectionner « Xtream ».
2. Renseigner le serveur (`http://exemple-xtream.com:8080`), l'utilisateur, le
   mot de passe et le format souhaité (`m3u8` ou `ts`).
3. Cliquer sur **Lire**.

L'URL construite a la forme :

```text
{server}/get.php?username={user}&password={pass}&type=m3u&output={format}
```

:::note
Certains fournisseurs exposent une API légèrement différente. Si la lecture
échoue, récupérez l'URL HLS directe auprès du fournisseur et utilisez le premier
mode.
:::

## Messages d'erreur

| Message | Cause probable | Solution |
| --- | --- | --- |
| « Colle une URL HLS (m3u8). » | Champ vide | Saisir une URL |
| « Remplis serveur, utilisateur et mot de passe. » | Champ Xtream manquant | Compléter les champs |
| « Lecture bloquée par le navigateur (interaction requise). » | Politique d'autoplay | Cliquer sur le bouton play de la vidéo |
| « Erreur de lecture … Vérifie l'URL / CORS / droits. » | Flux inaccessible ou CORS | Voir ci-dessous |
| « Impossible de lire ce flux dans ce navigateur. » | Format non supporté | Essayer un autre navigateur ou format |

## Problèmes CORS

Si le fournisseur n'autorise pas votre domaine, trois options :

1. Demander au fournisseur d'ajouter votre domaine à ses en-têtes CORS.
2. Utiliser l'URL HLS directe si elle est disponible.
3. Passer par le [proxy serverless](../architecture/modules.md#3-proxy-engine-serverless).

## Rappel légal

N'utilisez que des flux que vous avez le droit d'utiliser. KORA ONE ne fournit
aucun contenu et ne stocke aucun flux.
