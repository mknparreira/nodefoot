const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Squad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Squad.belongsTo(models.Player);
      Squad.belongsTo(models.Club);
    }
  }
  Squad.init({
    state: {
      type: DataTypes.ENUM,
      values: ['INJURIED', 'SUSPENDED'],
    },
    ki_number: DataTypes.INTEGER,
    position: {
      type: DataTypes.ENUM,
      values: ['GOALKEEPER', 'DEFENDER', 'MIDFIELDER', 'FORWARD'],
    },
  }, {
    sequelize,
    modelName: 'Squad',
  });
  return Squad;
};
