# TP - Fin année en algorithmie

## Reprenons les bases

### Exercice 1

Créer une fonction qui prend en paramètre un nom et affiche "Bonjour, [nom] !" dans la console.

Est ce réellement une fonction ?

### Exercice 2

Créer une fonction qui prend en paramètre un nombre et qui renvoie le carré de ce nombre.
Afficher le résultat dans la console du carré de 16.

Quel mot clé permet de confirmer qu'il s'agit bien d'une fonction ?

### Exercice 3

Créer une fonction qui prend en paramètre un nombre et qui renvoie `true` si ce nombre est pair et `false` s'il est impair.
Créer une variable qui contient vrai si le nombre 4 est pair sinon faux.

Afficher les résultat dans la console.

### Exercice 4

Sans utiliser la fonction `Math.min()` :
- Ecrire une fonction qui renvoie le nombre le plus petit parmi deux nombres passés en paramètres.
- Ecrire une fonction qui renvoie le minimum d'un tableau de nombres donné en paramètres.

Afficher les résultats dans la console.

## Des tableaux un peu plus complexes

### Exercice 1

Nous allons créer un tableau d'élèves.
Etape par étape, créer le tableau et le typage qui vous semblent les plus pertinents pour stocker les informations suivantes :
Etape 1 : Créer un tableau d'élèves
Etape 2 : Créer un tableau contenant les prenoms des élèves
Etape 3 : Créer un tableau contenant les prénoms et noms des élèves
Etape 4 : Créer un tableau contenant les prénoms et noms des élèves et leurs notes
Etape 5 : Créer un tableau contenant les prénoms et noms des élèves et leurs notes par matière

### Exercice 2

Créer une procédure qui permet d'afficher les prénoms d'un tableau d'èlèves au format de l'étape 5 de l'exercice 1.

De la même manière, créer une procédure qui permet d'afficher les prénoms et noms des élèves.

Créer une fonction qui permet de renvoyer le nom des matières d'un tableau d'élèves.

Créer une fonction qui renvoie la moyenne de l'avant dernier élève du tableau.

### Exercice 3

Créer une procédure qui permet de modifier toutes les notes des élèves de 1 point.
Si un élève a plus de 20, il doit avoir 20.

### Exercice 4

Créer une fonction qui permet de renvoyer le nombre d'élèves ayant plus de 10 de moyenne.

## Les méthodes des tableaux

### Exercice 1

Définissez ce qu'est une méthode.

### Exercice 2

A partir du tableau suivant :

```js
const fruits = ['pomme', 'banane', 'poire', 'fraise', 'orange'];
```

Avec la méthode `map`, créer un nouveau tableau qui contient la longueur de chaque fruit.

Avec la méthode `filter`, créer un nouveau tableau qui contient uniquement les fruits de plus de 5 lettres.

Avec la méthode `reduce`, créer une variable qui contient la concaténation de tous les fruits.

Avec la méthode `forEach`, afficher chaque fruit dans la console, les uns à la suite des autres.

Avec la méthode `find`, trouver le premier fruit qui contient la lettre 'a'.

Avec la méthode `some`, vérifier si un fruit contient la lettre 'z'.

Avec la méthode `every`, vérifier si tous les fruits contiennent la lettre 'e'.

Avec la function `sort`, trier les fruits par ordre alphabétique.

### Exercice 3

A partir du tableau suivant :

```js
const prix = [104, 23.3, 30.1, 240.9, 55];
```

Avec la méthode `map`, créer un nouveau tableau qui contient les prix TTC (20% de TVA).

Utilisez la bonne méthode pour :
- trouver le premier prix supérieur à 30.
- trier les prix par deuxièmre chiffre le plus grand (tous les prix ont au moins deux chiffres mais attention à la virgule).
- trouver le prix avec le plus de centimes.
- trouver la somme de tous les prix.

## Exercice à thème

### La mêlée

La coupe du monde de rugby a démarré ! L’occasion pour nous de te proposer des challenges spécial Rugby ! Au programme d’aujourd’hui, la mêlée !

Une mêlée est composée de 8 joueurs, répartis sur 3 lignes :

3 joueurs sur la première ligne
4 joueurs sur la deuxième ligne
1 dernier joueur sur la troisième et dernière ligne
Tu vas devoir calculer la puissance de la mêlée à l’impact !

RÈGLES
Les joueurs sont répartis dans 3 tableaux line1, line2 et line3.

Chaque joueur est défini par son poids et sa force, ce sont deux entiers, séparés par « : ».

L’impact de chaque joueur est égal à son poids multiplié par sa force.

Mais…

La première ligne a un coefficient supplémentaire de 1,5
La troisième ligne a un coefficient supplémentaire de 0,75
Pour les calculs, l’impact de chaque joueur doit être arrondi à l’entier inférieur, après application du coefficient.

Tu dois retourner l’impact total de la mêlée, c’est à dire la somme des impacts de chaque joueur.

```ts
const line1 = ["110:37","100:83","120:91"];
const line2 = ["99:25","86:56","108:47","100:42"];
const line3 = ["83:95"];
```

### La suite (compter les points)

La Coupe du monde continue, alors on continue l’exploration du Rugby par le code !

Cette fois-ci on se familiarise avec les règles et la façon de compter les points !

Au rugby, il y a 4 façons de marquer des points :

Un essai, le joueur a déposé le ballon dans l’en-but adverse. Un essai rapporte 5 points.
Après un essai, il peut y avoir une transformation, pour 2 points supplémentaires. Le ballon doit être botté au pied entre les 2 poteaux et au dessus de la barre horizontale du but adverse.
Un essai de pénalité peut être accordé si l’équipe qui défend commet volontairement une faute d’anti-jeu. Une pénalité rapporte 3 points.
Enfin, un drop si le ballon est botté entre les 2 poteaux et au dessus de la barre horizontale du but adverse au cours du jeu ou à la suite d’une pénalité. Un drop rapporte 3 points.
Rassure toi, tout ceci est finalement assez rapide à comprendre ! Magnifique sport, magnifiques règles !

RÈGLES
Tu as à ta disposition toutes les actions du match (seulement pour ton équipe) représentées par une lettre :

E : Essai
T : Transformation
P : Pénalité
D : Drop
Tu dois retourner le nombre total de points de ton équipe à la fin du match… mais… attention, une Transformation ne peut avoir lieu qu’après un Essai. Si un « T » ne se trouve pas immédiatement après un « E », il ne faut pas le prendre en compte. C’est la personne chargée de relever les actions qui s’est trompé ! Sûrement à cause d’un abus lors de la 3ème mi temps de la veille !

Par exemple :

ETETD : 5 + 2 + 5 + 2 + 3 => 17 points
ETTDPTE : 5 + 2 (T compte) + 0 (T ne compte pas) + 3 + 3 + 0 (T ne compte pas) + 5 => 18 points

```ts
const actions = "PPPPDPPTTPPDETPTEPEDTTTDPEDTDDT";
```