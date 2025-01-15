const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('BDD_Netflix', 'postgres', 'Studioos0110', {
  host: 'localhost',
  dialect: 'postgres',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion réussie à PostgreSQL !');
  } catch (error) {
    console.error('Erreur de connexion :', error);
  } finally {
    await sequelize.close();
  }
})();