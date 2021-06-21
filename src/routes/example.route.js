const { Router } = require('express');
const ExampleController = require('../controllers/Example.controller');

const routes = Router();

routes.get('/', ExampleController.index);
// routes.get('/', (req, res) => ExampleController.index);

module.exports = routes;
