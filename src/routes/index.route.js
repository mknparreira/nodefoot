const match = require('./match.route');

module.exports = (app) => {
  app.use(match);
};
