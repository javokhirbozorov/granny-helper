const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Granny extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.GrandChild, { through: models.Family, foreignKey: 'grannyId' });
      this.hasMany(models.Album, { foreignKey: 'grannyId' });
    }
  }
  Granny.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Granny',
  });
  return Granny;
};
