const express = require('express');
const routes = require('../routes/example.route');

class App {
  constructor() {
    this.express = express();
    this._loadMiddlewares();
    this._loadRoutes();
  }

  _loadMiddlewares() {
    this.express.use(express.json());
  }

  _loadRoutes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
