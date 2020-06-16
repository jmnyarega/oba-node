"use strict";
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "Company",
    {
      name: DataTypes.STRING,
      cop: DataTypes.STRING,
      country: DataTypes.STRING,
      address: DataTypes.STRING,
      abbr: DataTypes.STRING,
      accSoftware: DataTypes.STRING,
      entity: DataTypes.STRING,
      sales: DataTypes.STRING,
    },
    {}
  );
  Company.associate = function (models) {
    // associations can be defined here
  };
  return Company;
};
