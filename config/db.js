const { Sequelize } = require('sequelize');
require('dotenv').config();

// Créer la connexion avec PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false, // Désactive les logs SQL pour une meilleure lisibilité
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à PostgreSQL réussie');
  } catch (err) {
    console.error('Impossible de se connecter à PostgreSQL:', err);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
