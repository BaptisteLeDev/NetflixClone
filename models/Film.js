const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const film = sequelize.define('film', {
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categorie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  acteurs: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
});

module.exports = film;
