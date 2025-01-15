const Utilisateur = require('../models/utilisateur');

// Ajouter un utilisateur
exports.ajouterUtilisateur = async (req, res) => {
  try {
    const { nom, email, motDePasse } = req.body;
    const nouvelUtilisateur = await Utilisateur.create({ nom, email, motDePasse });
    res.status(201).json({ message: 'Utilisateur ajouté', utilisateur: nouvelUtilisateur });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

// Obtenir tous les utilisateurs
exports.obtenirUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.findAll();
    res.status(200).json(utilisateurs);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};
