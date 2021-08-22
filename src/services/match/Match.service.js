const randomEventsToMatch = require('match-system');
const matchRepository = require('../../repositories/match.repository');

class MatchService {
  constructor() {
    this.randomEventsToMatch = randomEventsToMatch;
    this.matchRepository = matchRepository;
  }

  match(matchId) {
    // this.randomEventsToMatch.getEvents();
    return this.matchRepository.getMatch(Number(matchId));
  }
}

module.exports = new MatchService();
