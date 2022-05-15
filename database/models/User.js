const Shoplist = require("./Shoplist");

module.exports = (sequelize, DataTypes) => {
  let alias = "User";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    email: {
      type: DataTypes.STRING,
    },
    pass: {
      type: DataTypes.STRING,
    },
    accessLevel: {
      type: DataTypes.TINYINT,
    },
    avatar: {
      type: DataTypes.STRING,
    },
  };
  let config = {
    tableName: "user",
    timestamps: false,
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = function (models) {
    User.hasMany(models.Shoplist, {
      as: "shoplist",
      foreignKey: "user_id",
    });
  };
  return User;
};
