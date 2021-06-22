const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Club.belongsTo(models.Coach);

      Club.hasMany(models.Match, {
        foreignKey: 'fk_club_id_home',
      });

      Club.hasMany(models.Match, {
        foreignKey: 'fk_club_id_away',
      });

      Club.hasMany(models.Table, {
        foreignKey: 'fk_club_id',
      });

      Club.hasMany(models.Squad, {
        foreignKey: 'fk_club_id',
      });
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
