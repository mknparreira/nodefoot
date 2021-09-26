const db = require('../config/database.config');

class MatchRepository {
  constructor() {
    this.model = db.Match;
  }

  async getMatch(id) {
    const objMatch = await this.model.findOne({
      where: { id },
      attributes: ['id', 'shift', 'round', 'score_home', 'score_away'],
      include: [
        {
          association: 'clubHome',
          attributes: ['name', 'stadium_name'],
          include: [
            { association: 'coach', attributes: ['name'] },
            {
              association: 'squad',
              attributes: ['kit_number', 'state'],
              include: { association: 'player', attributes: ['name', 'overall', 'position'] },
            },
          ],
        },
        {
          association: 'clubAway',
          attributes: ['name', 'stadium_name'],
          include: [
            { association: 'coach', attributes: ['name'] },
            {
              association: 'squad',
              attributes: ['kit_number', 'state'],
              include: { association: 'player', attributes: ['name', 'overall', 'position'] },
            },
          ],
        },
      ],
    });

    if (!objMatch) {
      return false;
    }

    return objMatch;
  }
}

module.exports = new MatchRepository();
