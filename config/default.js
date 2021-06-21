const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  General: {
    host: {
      port: process.env.HOST_PORT,
    },
  },
  Database: {
    username: process.env.DB_USERNAME,
    password: '',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
  },
};
