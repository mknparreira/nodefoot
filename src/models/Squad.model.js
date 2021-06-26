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
    kit_number: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Squad',
  });
  return Squad;
};
