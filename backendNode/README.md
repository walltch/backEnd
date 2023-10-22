Ce boilerplate utilise npm pour la gestion des packages et met en place un 
CRUD (Create, Read, Update, Delete) pour gérer une liste de tâches. 
Vous pouvez créer, lire, mettre à jour et supprimer des pokemons ou users en utilisant les endpoints suivants :

Création : POST pkm ou user/create
Lecture : GET /pkm ou user
Mise à Jour : PUT pkm ou user/update/:id
Suppression : DELETE pkm ou user/delete/:id

Utilisez postman pour faire les requetes

L'authentification des utilisateurs s'effectue à partir d'un jeton (token) avec un protocole http.

Les principales dépendances utilisées dans ce projet incluent :
- Express : pour le développement du serveur web.
- Jest : pour la rédaction de tests.
- ESLint : pour maintenir la structure du code et détecter les erreurs.
- Bcrypt : pour le hachage sécurisé des mots de passe.
- Nodemon : pour redémarrer automatiquement le serveur en cas de modification de fichiers.
- Dotenv : pour stocker et gérer les variables d'environnement.
- Mongoose : pour interagir avec la base de données MongoDB.