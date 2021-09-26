const randomEventsToMatch = require('match-system');
const matchRepository = require('../../repositories/match.repository');

class MatchService {
  constructor() {
    this.randomEventsToMatch = randomEventsToMatch;
    this.matchRepository = matchRepository;
  }

  async match(matchId) {
    // const events = await this.randomEventsToMatch.getEvents();
    const match = await this.matchRepository.getMatch(Number(matchId));
    return match;
  }
}

module.exports = new MatchService();
