const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    static associate(models) {
      Match.belongsTo(models.Club, { foreignKey: 'fk_club_id_home', as: 'clubHome' });
      Match.belongsTo(models.Club, { foreignKey: 'fk_club_id_away', as: 'clubAway' });
    }
  }

  Match.init({
    shift: DataTypes.INTEGER,
    round: DataTypes.INTEGER,
    score_home: DataTypes.INTEGER,
    score_away: DataTypes.INTEGER,
    resume: DataTypes.JSON,
    final_result: {
      type: DataTypes.ENUM,
      values: ['HOME_WON', 'AWAY_WON', 'DRAWN'],
    },

  }, {
    sequelize,
    modelName: 'Match',
  });

  return Match;
};
