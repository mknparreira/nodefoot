const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const globalConfig = require('config');

const databaseConfig = globalConfig.get('Database');

const db = {};

const sequelize = new Sequelize(databaseConfig.database,
  databaseConfig.username, databaseConfig.password, databaseConfig);

// Test connection
console.info('SETUP - Connecting database...');

sequelize
  .authenticate()
  .then(() => {
    console.info('INFO - Database connected.');
  })
  .catch((err) => {
    console.error('ERROR - Unable to connect to the database:', err);
  });

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    if (typeof (model) !== 'function') return;
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
