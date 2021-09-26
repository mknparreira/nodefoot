const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.hasMany(models.Squad, { foreignKey: 'fk_player_id', as: 'playerSquad' });
    }
  }
  Player.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    birth_date: DataTypes.DATEONLY,
    overall: DataTypes.INTEGER,
    position: {
      type: DataTypes.ENUM,
      values: ['GOALKEEPER', 'DEFENDER', 'MIDFIELDER', 'FORWARD'],
    },
    traits: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};
