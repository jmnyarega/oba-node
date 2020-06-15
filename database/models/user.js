const bcrypt = require("bcrypt");
("use strict");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
      lastName: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
      },
      username: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty(password) {
            if (bcrypt.compareSync("", password))
              throw new Error("Validation notEmpty on password failed");
          },
        },
      },
    },
    {
      defaultScope: {},
      paranoid: true,
    }
  );
  User.associate = function (models) {
    // User.hasMany(models.Expense);
  };
  return User;
};
