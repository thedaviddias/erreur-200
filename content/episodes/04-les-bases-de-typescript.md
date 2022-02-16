---
type: podcast-episode
guid: 0c5b5222-03fd-421d-a714-4f9cfd844f98
episodeNumber: 4
season: 1
title: 'Les bases de TypeScript'
slug: les-bases-de-typescript
subtitle: Dans cet épisode David et Jean-Rémy explorent les bases de TypeScript, un sur-ensemble de JavaScript avec plein de fonctionalités super utile pour un code propre, flexible et rigoureux.
publicationDate: 2021-11-12
url: https://erreur200.s3.eu-west-3.amazonaws.com/04-les-bases-de-typescript.mp3
status: published
author: David Dias & Jean-Rémy Duboc
episodeType: full
size: 47258
duration: 2467
explicit: false
categories:
  - Code
  - JavaScript
  - TypeScript
  - Variables
  - Fonctions
  - Web development
---

Dans cet épisode David et Jean-Rémy explorent les bases de TypeScript, un sur-ensemble de JavaScript avec plein de fonctionalités super utile pour un code propre, flexible et rigoureux.

## Notes de l'épisode

[https://www.typescriptlang.org/docs/handbook/2/everyday-types.html](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

- Types primitifs:
  - `string`,
  - `number`,
  - `boolean`
- `any` et `unknown`

```tsx
var nimportQuoi:any = "nimporte quoi";
```

- `array`

```tsx
var tableauChiffres:number[] = [1,2,3];
```

- `enum` - https://www.typescriptlang.org/docs/handbook/enums.html

```tsx
var enum Liste {
  un = 1,
  deux,
  trois,
  quatre,
}
```

On a donc des valeurs **constantes** et des valeurs **calculées**

- On peut accèder à chaque élément avec la notation pointée

```tsx
Liste.deux //renvoie 2
```

## Signatures de type pour les fonctions

- On peut imposer qu'une fonction prennent certains type en argument
- On peut aussi imposer qu'une fonction renvoie un type de variable spécifique.

Example: la fonction **additionne** renvoie toujours une variable numérique, et prend toujours des variables numériques

```tsx
function additionne(premier: number, deuxieme: number):number {
  return premier + deuxieme;
}
```

- Si une fonction ne doit rien renvoyer, on peut ajouter **void** pour le préciser

Example: la fonction mutiplieParTrois  change la valeur d'une variable mis en paramètre, mais ne renvoie aucune valeur:

```tsx
function mutiplieParTrois(chiffreAMultiplier):void{
  chiffreAMultiplier = chiffreAMultiplier * 3;
  // Ne renvoie rien
}
```

## Liens

- Site officiel TypeScript - [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- Babel pour la transpilation - [https://babeljs.io/](https://babeljs.io/)
- Outil ligne de commande TSC pour compiler TypeScript - [https://www.typescriptlang.org/docs/handbook/compiler-options.html](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- Webpack - [https://webpack.js.org/](https://webpack.js.org/)
