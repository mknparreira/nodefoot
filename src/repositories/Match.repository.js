const match = require('../models/Match.model');

class MatchRepository {
  constructor() {
    this.model = match();
  }

  async getMatch(id) {
    const objMatch = await this.model.findOne({
      where: {
        id,
      },
    });

    if (!objMatch) {
      return false;
      // throw new Error();
    }

    return objMatch;
  }
}

module.exports = new MatchRepository();
