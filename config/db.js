const { Sequelize } = require('sequelize');
require('dotenv').config(); // Assurez-vous que cette ligne est bien incluse

// Créez l'instance Sequelize avec les informations de la base de données
const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'postgres', // PostgreSQL comme dialecte
  port: process.env.DB_PORT || 5432, // Port par défaut de PostgreSQL
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie');
  } catch (error) {
    console.error('Impossible de se connecter à la base de données:', error);
  }
};

module.exports = { sequelize, connectDB };

// Debugging des variables d'environnement
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);
