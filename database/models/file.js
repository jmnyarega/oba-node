'use strict';
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    name: DataTypes.STRING,
    size: DataTypes.NUMBER,
    type: DataTypes.STRING,
    file: DataTypes.BLOB
  }, {});
  File.associate = function(models) {
    // associations can be defined here
  };
  return File;
};