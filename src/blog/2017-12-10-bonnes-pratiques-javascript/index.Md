---
path: '/bonnes-pratiques-javascript'
title: 'Bonnes pratiques en Javascript'
date: '2017-12-10'
---

## Préférez inclure les scripts en bas de page

Par mesure de performance, il est préférable de placer son code javascript en bas de page juste avant la balise &lt;/body&gt;. Le chargement d’une page HTML est séquentiel (de haut en bas). Si vous incluez votre script au début de votre page, votre fichier javascript devra attendre d’être chargé avant d’afficher la page. Ce qui peut augmenter le chargement de la page si votre fichier javascript est conséquent.

Une alternative consiste à mettre le mot-clé "async" dans la balise script, afin de charger le fichier javascript de façon asynchrone :

```javascript
<script src="script.js" async></script>
```

On évite ici d’attendre le chargement du fichier javascript avant d’afficher la page.

Attention, si vous chargez 2 fichiers JS en "async", l’ordre de chargement ne sera pas forcément respecté. Ils sont utilisés dès qu’ils sont disponibles. Donc si un de votre script JS dépend de l’autre et qu"il est chargé avant lui, cela peut causer des problèmes.

En autre, n’écrivez pas ça:

```javascript
<script src="code.js" async></script>
<script src="script_utilisant_code.js" async></script>
```

## Les short circuits

Il possible d’utiliser les opérateurs "**||**" et "**&&**" ailleurs que dans un if.
On peut par exemple utiliser l'opérateur "**||**" pour affecter une valeur par défaut:

<pre class=" language-javascript"><code class=" language-javascript"><span class="token keyword">var</span> nameNull <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> nameNull <span class="token operator">||</span> <span class="token string">'default'</span><span class="token punctuation">;</span> <span class="token comment">//name = 'default'</span>
</code></pre>

Cette méthode permet d’affecter la deuxième valeur si la première vaut "null" ou "undefined" par exemple.

On peut utiliser l'opérateur "**&&**" pour écrire un if plus rapidement:

Version longue:

```javascript
if(true) {
    console.log('true');
} // 'true'
if(false) {
    console.log('true');
} // console.log n'est pas exécuté
```

Version courte:

```javascript
( true && console.log('true') ) //'true'
( false && console.log('true') ) //console.log n'est pas exécuté
```

## Convertir une date en millisecondes

Il est possible de convertir une date en millisecondes, simplement en mettant un “+” devant :

```javascript
var date = new Date(); //date vaut Thu Dec 21 2017 23:37:49 GMT+0100 (Paris, Madrid)
+date; //date vaut 1513895869229
```

## == VS ===

Pour comparer une égalité, il est possible d’utiliser le double égal “==”, mais aussi le triple égal “===”. Quelle est la différence ?

Le double égal compare le contenu UNIQUEMENT. Par exemple:

```javascript
2 == 2  //donne “true” 
```

Et

```javascript
'2' == 2  //donne “true” aussi
```

On a beau comparer une string à un int, les deux ont le même contenu : 2. Donc ils sont égaux.

Le triple égal lui, va comparer le contenu ET le type. Si on reprend notre exemple :

```javascript
2 === 2  //donne toujours “true”
```

Et

```javascript
'2' === 2  //donne “false”
```

Dans le deuxième cas, le contenu est le même mais pas le type, car on compare une string à un int. On obtient donc false.

## Les variables et les boucles

Tout le monde n’a pas l’habitude d’écrire ça, mais il est possible de déclarer plusieurs variable pour une boucle:

Ecriture "habituelle":

```javascript
var autre_var = 0;
for(var i = 0;  i<10;  i++) {
    console.log(i, autre_var);
}
```

Si "autre_var" ne sert que dans la boucle, on peut écrire:

```javascript
for(var i = 0, autre_var = 0; i<10; i++) {
    console.log(i, autre_var);
}
```

Vous pouvez définir toutes les variables donc vous aurez besoin dans la boucle de cette façon.

## Utiliser les FragmentDOM

Si vous avez un traitement un peu long qui a pour but de modifier le DOM, vous pouvez utiliser les objets DocumentFragment. Ils ne font pas partie du DOM, mais vous permettent de créer un DOM en le stockant en mémoire. Cela permet des mises à jour du DOM avec de meilleur performance:
HTML:

```html
<ul id="maliste">
</ul>
```

Javascript:

```javascript
var maliste = document.getElementById('maliste');
var fragment = document.createDocumentFragment();
var planetes = ['mercure', ,'venus', 'terre', 'mars' ];
planetes.forEach(function(planete) {
    var li = document.createElement('li');
    li.textContent = planete;
    fragment.appendChild(li);
});
maliste.appendChild(fragment);
```

On évite ici de mettre à jour le DOM à chaque itération. On stocke un DOM en mémoire (dans "fragment"), et on ne met à jour la liste qu’à la fin.
