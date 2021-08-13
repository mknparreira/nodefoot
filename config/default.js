const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

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
  },
};
