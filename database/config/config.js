const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_DATABASE_NAME,
    host: process.env.DEV_DB_HOST,
    storage: "./database.sqlite",
    dialect: process.env.DEV_DB_DIALECT,
  },
  test: {
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_DATABASE_NAME,
    host: process.env.TEST_DB_HOST,
    storage: ":memory",
    dialect: process.env.DEV_DB_DIALECT,
  },
  production: {
    storage: "./database.sqlite",
    url: process.env.DATABASE_URL,
    dialect: process.env.PROD_DB_DIALECT,
    dialectOptions: {
      ssl: false,
    },
  },
};
