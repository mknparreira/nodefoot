const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const globalConfig = require('config');

class Database {
  _connection() {
    const databaseConfig = globalConfig.get('Database');

    const connection = new Sequelize(databaseConfig.database,
      databaseConfig.username, databaseConfig.password, databaseConfig.options);

    console.info('SETUP - Connecting database...');

    connection
      .authenticate()
      .then(() => {
        console.info('INFO - Database connected.');
      })
      .catch((err) => {
        console.error('ERROR - Unable to connect to the database:', err);
      });

    return connection;
  }

  _filesystem() {
    const db = {};
    const basename = path.basename(__filename);
    const sequelize = this._connection();
    const modelsPath = path.resolve('./src/models');

    fs
      .readdirSync(modelsPath)
      .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
      .forEach((file) => {
        const model = require(path.join(modelsPath, file))(sequelize, Sequelize.DataTypes);

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

    return db;
  }
}

module.exports = new Database()._filesystem();
