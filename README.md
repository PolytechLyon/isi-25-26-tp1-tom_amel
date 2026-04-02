[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=23392199)
# Une liste de tâches

Dans cet exercice, vous devez créer une page web pour gérer une liste de tâches à faire (to-do list).

Ce dépôt contient le fichier HTML de la page souhaitée, ainsi qu'un fichier CSS et un fichier JavaScript vide.

## Modalités
- Vous devez réaliser l'exercice en binôme.

## Consignes
Vous devrez créer une application de gestion de liste de tâches à l'exemple de [cette application](https://polytechlyon.github.io/js-todo-list-examples/step1/).

Vous réaliserez votre application à partir du code fourni, qui contient un fichier HTML et un fichier de style CSS.
Vous devrez donc, au cours de cet exercice, enrichir les fichiers pour réaliser la fonctionnalité demandée.

La page doit être réalisée en utilisant JavaScript, sans bibliothèque externe.

## Fonctionnalités

Vous devez animer la page HTML fournie avec un code JavaScript permettant les fonctionnalités suivantes.
Sauf exception justifiée, vous ne devez pas changer le fichier `index.html`.

À ce stade, la liste ne sera pas sauvegardée entre les rafraîchissements de page, ou lorsque la page est fermée puis visitée à nouveau.

La page doit contenir un panneau permettant l'ajout d'un nouvel item.
L'item sera ajouté en bas de la liste.

La liste de tâches doit être affichée en permanence sur la page.
Chaque item doit être accompagné de deux boutons : suppression et modification.

Lorsqu'on actionne le bouton de suppression, l'item correspondant sera supprimé de la liste.

L'appui sur le bouton de modification active le mode de modification.
Un panneau sera affiché, permettant de modifier le texte de l'item grâce à un champ d'entrée.
On peut soit confirmer, soit annuler la modification grâce à deux boutons.
Dans les deux cas, le mode de modification sera désactivé.
Lorsque le mode de modification est actif, le panneau de création doit être masqué.

## Extensions

### Une page de gestion d'une liste persistante
À l'exemple de [cette page](https://polytechlyon.github.io/js-todo-list-examples/step2/),
modifiez votre code pour que la liste des tâches soit sauvegardée, côté client, entre deux rafraîchissements ou lorsque la page est fermée puis visitée à nouveau.

Pensez à utiliser l'objet `localStorage` pour la sauvegarde et l'objet `JSON` pour la sérialisation et désérialisation de la liste.

### Gestion des tâches terminées
À l'exemple de [cette page](https://polytechlyon.github.io/js-todo-list-examples/step3/),
vous devez modifier le code pour ajouter à chaque item de la liste une case à cocher qui détermine si la tâche en question est accomplie.

Le choix de la case doit, lui aussi, être sauvegardé entre plusieurs chargements de la page. 

### Application de gestion d'une liste des tâches avec une page d'impression
À l'exemple de [cette page](https://polytechlyon.github.io/js-todo-list-examples/step4/),
vous devez ajouter une page d'impression à votre application qui affiche la liste des tâches en mode lecture seule.
La page affiche un récapitulatif avec le nombre total des tâches ainsi que le nombre des tâches qui ne sont pas encore terminées.
Elle affiche aussi la liste de toutes les tâches, avec celles terminées en texte barré.

Cette page doit être accessible depuis la page principale. Vous devrez donc modifier la page principale pour ajouter le lien.

La page principale doit être accessible depuis la page d'impression.

## Outils
### Pour coder
Pour cet exercice, vous n'aurez besoin que d'un éditeur de texte et d'un navigateur web.
Vous pouvez toutefois utiliser un éditeur de développement intégré, comme VS Code ou WebStorm, pour réaliser votre développement.

### Pour tester
La page doit s'afficher dans un navigateur web.
Vous n'aurez pas besoin d'un serveur web local pour cet exercice.
La page peut etre ouverte avec le protocole `file://`, par exemple en double-cliquant sur le fichier HTML dans votre navigateur de fichiers.

### Utilisation d'un IDE en ligne
Vous pouvez utiliser l'éditeur en ligne Codespaces pour cet exercice, accessible depuis le bouton "Code", onglet "Codespaces", sur GitHub.
Pour tester votre page dans cette configuration, vous serez amené à lancer un serveur HTTP local.
Depuis le dossier du projet, exécutez la commande suivante dans un terminal : `npx http-server`.
Dans Codespaces, un bouton apparaît quand le serveur démarre pour vous proposer d'ouvrir la page dans un nouvel onglet du navigateur.

## Référence
* [Propriété `localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
* [L'objet JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON).
