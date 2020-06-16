"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Companies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      cop: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      address: { type: Sequelize.STRING },
      abbr: { type: Sequelize.STRING },
      accSoftware: { type: Sequelize.STRING },
      entity: { type: Sequelize.STRING },
      sales: { type: Sequelize.STRING },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Companies");
  },
};

