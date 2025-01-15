const express = require('express');
const { ajouterUtilisateur, obtenirUtilisateurs } = require('../controllers/utilisateurs');
const router = express.Router();

// Ajouter un utilisateur
router.post('/ajouter', ajouterUtilisateur);

// Obtenir tous les utilisateurs
router.get('/', obtenirUtilisateurs);

module.exports = router;
