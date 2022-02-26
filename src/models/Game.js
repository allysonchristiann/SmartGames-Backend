const { Model, DataTypes } = require("sequelize");

class Game extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DOUBLE,
        image: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Store, {
      through: "game_store",
      foreignKey: "game_id",
    });
    this.belongsToMany(models.Platform, {
      through: "game_platform",
      foreignKey: "platform_id",
    });
  }
}
module.exports = Game;
