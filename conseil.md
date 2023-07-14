
## Exo 1 : 
Créer un nouveau dossier ReactJs , et commencez par le nettoyer correctement .
Dans le fichier App.js , créez une variable simple "nom" et "age" ;
Afficher la valeur des variables dans un h1 dans le return de App .

## Exo 2 :
Créez une variable "count" qui aura comme valeur de départ 0 ;
Dans le return de App , créez un bouton qui aura comme fonction dans son onClick , "add" ;
Créez un h1 qui aura la valeur de la variable "count" ;
A chaque clique du bouton , ajouter un +1 à la valeur de count , et faites un log dans la fonction de "count" pour voir le résultat sur la console.

## Exo 3 : 
Pour impacter l'html avec les modifications javascript , il faut utiliser les useState . 
Changez la variable "count" en une variable useState , qui aura toujours comme valeur 0 ;
Utiliser le set**Variable** de "count" pour mettre à jour son état dans la fonction "add" .
Remarquez le résultat sur votre site .

## Exo 4 :
Changez la variable "nom" , et "age" en variable useState , qui aurons toujours leurs valeurs de départ .
Créez un bouton qui aura dans son onClick une fonction "change" , au clique du bouton , 2 prompt lui demandant respectivement , de changez son "nom" et son "age" .
Utiliser les set**Variable** de chaque variable pour mettre à jour leurs état .

## Exo 5 :
Dans une div , créez un input et un bouton ;
Utilisez l'input pour changez la valeur de la variable "nom" au clique du bouton .
A savoir , vous devez créer une variable useState pour stockez la valeur de l'input ;
Pour prendre la valeur de l'input , utilisez le onChange avec comme parametre "event" .

## Exo 6 :
Si l'user à moins que 18 ans , faites afficher un h1 : Vous ne pouvez pas rentrer 
Si il a plus que 18 ans , faites afficher un h1 : Vous pouvez rentrer 
Si il a 18 ans , faites afficher un h1 : t'as de la chance 

## Exo 7 :
Créez un nouveau fichier js que vous nommerez Tableau.js; 
Créez son componenet du même nom ;
Mettez dans son return un simple h1 : Hello world ;
Ajoutez le component sur l'index.js et mettez en commentaire le componenet App.js
(vous pouvez ne pas mettre le h1)

## Exo 8 : 
Dans le fichier Tableau.js , créez une variable array simple "myArray" : ["Ayoub" , "Adil" , "Mehdi" , "Hamza"];
Faites en sorte d'afficher chaque élément du tableau dans un h1 à travers une boucle en utilisant "map" .

## Exo 9 :
Il est évident maintenant que pour chaque changement qu'on veut appliquer , il faut utiliser des variables useState . Changez la variable "myArray" en useState en gardant les mêmes valeurs .
Ajouter un bouton qui sera placé en dessous de chaque élément boucler dans le return .
Ce bouton aura comme fonction dans son onClick "suppr" , au clique sur le bouton , l'élément où il se trouve sera supprimer du tableau .
A SAVOIR : 
Il faudra utiliser un parametre pour determiner la position de l'élément qu'on veut supprimer et la passer comme parametre dans notre fonction .
Il faut d'abord créer une copie de notre tableau avec la technique du *spread operator* , travailler sur la copie , puis mettre la copie dans le set**Variable** de notre tableau pour le mettre à jour .

## Exo 10 :
Avec le même fonctionnement que l'exo 9 !!
Créez un bouton pour edit .
Avant la boucle de notre tableau , créez une div qui aura un input et un bouton , au clique sur le bouton , push la valeur de l'input dans notre tableau .

## Exo 11 :
Créez un nouveau fichier Object.js 
Faites comme l'exo 7 .
Créez une variable objet "presentation" en useState qui aura comme propriété : "nom" , "age" , "metier" .
Créez 3 div , qui aura chacune un input et un bouton . Chaque input et bouton servira respectivement à modifier la propriété "nom" , "age" , "metier" .
A SAVOIR  : 
Comme pour les tableaux , il faut d'abord créer une copie de notre objet avec la technique du *spread operator* , travailler sur la copie , puis mettre la copie dans le set**Variable** de notre objet pour le mettre à jour .

## Exo 12 :
Créez un nouveau fichier Auth.js
Créez un formulaire d'inscription et un formulaire de connexion 
Créez une variable array "users" en useState dont la valeur sera vide , elle contiendra tout les users inscris via le formulaire d'inscription .
Chaque user unique sera sous forme d'objet et aura comme propriété : "nom" , "email" , "mdp" , "connected" .
Si un user se connecte , il ne faut plus afficher les formulaires d'inscription et de connexion , et afficher à la place une bouton deconnexion .
Si un user est connecté , tout les autres users doivent être deconnectés  et afficher dans un h1 ses informations.
A SAVOIR : 
Faites le + de vérification possible.


