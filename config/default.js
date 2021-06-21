const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  General: {
    host: {
      port: process.env.HOST_PORT,
    },
  },
};
