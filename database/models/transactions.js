"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define(
    "Transactions",
    {
      transaction: DataTypes.STRING,
      status: DataTypes.STRING,
      transaction_date: DataTypes.STRING,
      due_date: DataTypes.STRING,
      supplier: DataTypes.STRING,
      item: DataTypes.STRING,
      quantity: DataTypes.NUMBER,
      unit_amount: DataTypes.NUMBER,
      amount: DataTypes.NUMBER,
    },
    {}
  );
  Transactions.associate = function (models) {
    // associations can be defined here
  };
  return Transactions;
};

