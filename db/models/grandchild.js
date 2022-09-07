const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GrandChild extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Granny, { through: models.Family, foreignKey: 'grandChildId' });
    }
  }
  GrandChild.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'GrandChild',
  });
  return GrandChild;
};
