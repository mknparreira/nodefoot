const express = require('express');
const routes = require('../routes/index.route');

class App {
  constructor() {
    this.express = express();
    this.routes = routes(this.express);
    this._loadMiddlewares();
  }

  _loadMiddlewares() {
    this.express.use(express.json());
  }
}

module.exports = new App().express;
