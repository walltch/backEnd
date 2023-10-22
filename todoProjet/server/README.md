L'administration des packages est assurée grâce à l'utilisation de npm.

Ce boilerplate contient deux modules clairement définis :

1. Un module consacré aux Pokémon.
2. Un module spécialement conçu pour la gestion des utilisateurs.

Le page principale affiche la liste des utilisateurs et des Pokémon. En fonction du chemin choisi, vous obtiendrez un résultat filtré. Par exemple, en accédant à '/user', vous accéderez à la liste des utilisateurs.

Chacun de ces modules offre un ensemble de fonctionnalités standard, notamment :
- Création
- Lecture
- Mise à jour
- Suppression

L'authentification des utilisateurs s'effectue à partir d'un jeton (token) avec un protocole http.

Les principales dépendances utilisées dans ce projet incluent :
- Express : pour le développement du serveur web.
- Jest : pour les tests.
- ESLint : pour maintenir la structure du code et détecter les erreurs.
- Bcrypt : pour le hachage sécurisé des mots de passe.
- Nodemon : pour redémarrer automatiquement le serveur en cas de modification de fichiers.
- Dotenv : pour stocker et gérer les variables d'environnement.
- Mongoose : pour interagir avec la base de données MongoDB.