"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      transaction: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      transaction_date: {
        type: Sequelize.STRING,
      },
      due_date: {
        type: Sequelize.STRING,
      },
      supplier: {
        type: Sequelize.STRING,
      },
      item: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.NUMBER,
      },
      unit_amount: {
        type: Sequelize.NUMBER,
      },
      amount: {
        type: Sequelize.NUMBER,
      },
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
    return queryInterface.dropTable("Transactions");
  },
};

