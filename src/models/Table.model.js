const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Table.belongsTo(models.Club);
    }
  }
  Table.init({
    position: DataTypes.INTEGER,
    points: DataTypes.INTEGER,
    wow: DataTypes.INTEGER,
    drawn: DataTypes.INTEGER,
    lost: DataTypes.INTEGER,
    gf: DataTypes.INTEGER,
    ga: DataTypes.INTEGER,
    gd: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Table',
  });
  return Table;
};
