const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const film = require('./models/Film');
const utilisateur = require('./models/utilisateur');


// Charger les variables d'environnement
dotenv.config();

// Connexion à la base de données PostgreSQL
connectDB();

const app = express();

// Middleware pour analyser les données JSON
app.use(express.json());

// Routes et autres configurations à ajouter...

// Synchroniser les modèles avec la base de données
const syncDB = async () => {
  try {
    await sequelize.sync({ force: true }); // force: true pour recréer les tables à chaque démarrage
    console.log('Les modèles ont été synchronisés avec succès');
  } catch (err) {
    console.error('Erreur lors de la synchronisation des modèles:', err);
  }
};

syncDB();

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
