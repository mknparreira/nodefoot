const matchRepository = require('../repositories/Match.repository');

class MatchService {
  constructor() {
    this.matchRepository = matchRepository;
  }

  match(matchId) {
    return this.matchRepository.getMatch(Number(matchId));
  }
}

module.exports = new MatchService();
