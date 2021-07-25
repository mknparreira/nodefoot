const matchService = require('../services/match/Match.service');

class MatchController {
  index(req, res) {
    return res.json('Hello World');
  }

  async match(req, res) {
    const { matchId } = req.params;
    const result = await matchService.match(matchId);
    return res.json(result);
  }
}

module.exports = new MatchController();
