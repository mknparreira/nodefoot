const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    static associate(models) {
      Club.belongsTo(models.Coach, { foreignKey: 'fk_coach_id', as: 'coach' });

      Club.hasMany(models.Match, {
        foreignKey: 'fk_club_id_home',
      });

      Club.hasMany(models.Match, {
        foreignKey: 'fk_club_id_away',
      });

      Club.hasMany(models.Table, {
        foreignKey: 'fk_club_id',
      });

      Club.hasMany(models.Squad, { foreignKey: 'fk_club_id', as: 'squad' });
    }
  }
  Club.init({
    name: DataTypes.STRING,
    history: DataTypes.TEXT,
    country: DataTypes.STRING,
    stadium_name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Club',
  });
  return Club;
};
