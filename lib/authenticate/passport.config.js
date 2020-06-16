function initialize(ctx) {
  const { passport, LocalStrategy, db, JWTStrategy, ExtractJwt, bcrypt } = ctx;

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async function (email, password, cb) {
        try {
          const user = await db.User.findOne({ where: { email: email } });
          const validPass = await bcrypt.compare(password, user.password);
          if (user && validPass) {
            const { id, email, firstName, lastName } = user;
            const payload = { id, email, firstName, lastName };
            return cb(null, payload, { message: "logged In successfully" });
          } else {
            return cb(null, false, { message: "Invalid password or email" });
          }
        } catch (error) {
          console.log(error);
          cb(error);
        }
      }
    )
  );

  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET,
      },
      function (jwtPayload, cb) {
        return db.User.findOne({ where: { id: jwtPayload.id } })
          .then((user) => {
            return cb(null, user);
          })
          .catch((err) => {
            return cb(err);
          });
      }
    )
  );
}

module.exports = initialize;
