const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const passportJWT = require("passport-jwt");
const bcrypt = require("bcrypt");
const cors = require("cors");

const { db, sequelize, Op } = require("./database/models");
const router = require("./lib/index");
const passportInitialize = require("./lib/authenticate/passport.config");

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const context = {
  app,
  db,
  PORT,
  sequelize,
  Op,
  passport,
  LocalStrategy,
  jwt,
  JWTStrategy: passportJWT.Strategy,
  ExtractJwt: passportJWT.ExtractJwt,
  bcrypt,
};

passportInitialize(context);
router(context);

module.exports = {
  context,
};
