const randomEventsToMatch = require('match-system');
const matchRepository = require('../../repositories/Match.repository');
const { getCurrentSquad } = require('../../utils/Team.util');

class MatchService {
  constructor() {
    this.randomEventsToMatch = randomEventsToMatch;
    this.matchRepository = matchRepository;
  }

  async match(matchId) {
    // const events = await this.randomEventsToMatch.getEvents();
    const match = await this.matchRepository.getMatch(Number(matchId));

    const objMatch = match.get({ plain: true });

    // https://stackoverflow.com/questions/64546830/sequelize-how-to-eager-load-with-associations-raw-true
    const teste = getCurrentSquad(objMatch.clubHome.squad);
    const teste2 = getCurrentSquad(objMatch.clubAway.squad);
    console.log('TIME!', teste.goalkeepers.start);
    console.log('TIME2', teste2.goalkeepers.start);
    return teste;
  }
}

module.exports = new MatchService();
