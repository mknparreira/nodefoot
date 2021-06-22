const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Match.belongsTo(models.Club);
      Match.belongsTo(models.Club);
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
