const db = require('../config/Database.config');

class MatchRepository {
  constructor() {
    this.model = db.Match;
  }

  async getMatch(id) {
    const objMatch = await this.model.findOne({
      where: {
        id,
      },
      include: ['clubHome', 'clubAway'],
    });

    console.log(objMatch);

    if (!objMatch) {
      return false;
      // throw new Error();
    }

    return objMatch;
  }
}

module.exports = new MatchRepository();
