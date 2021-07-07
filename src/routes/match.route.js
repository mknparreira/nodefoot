const { Router } = require('express');
const MatchController = require('../controllers/Match.controller');

const routes = Router();

routes.get('/match', MatchController.index);
routes.get('/match/:matchId', MatchController.match);
// routes.get('/', (req, res) => ExampleController.index);

module.exports = routes;
