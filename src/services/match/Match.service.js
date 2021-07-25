const matchRepository = require('../../repositories/Match.repository');
const eventService = require('./Event.service');

class MatchService {
  constructor() {
    this.matchRepository = matchRepository;
    this.eventService = eventService;
  }

  match(matchId) {
    const events = this.eventService.getEvents();

    console.log(events);

    return this.matchRepository.getMatch(Number(matchId));
  }
}

module.exports = new MatchService();
