const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const utilisateur = sequelize.define('utilisateur', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  motDePasse: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = utilisateur;
