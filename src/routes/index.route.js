const example = require('./example.route');
const match = require('./match.route');

module.exports = (app) => {
  app.use(example);
  app.use(match);
};
