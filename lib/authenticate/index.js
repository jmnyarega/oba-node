const login = async (ctx, req, res) => {
  const { passport, jwt } = ctx;
  passport.authenticate("local", { session: false }, (err, user, _) => {
    if (!user) {
      return res.status(401).json({ message: "Invalid password/email" });
    }
    if (err) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    const token = jwt.sign(user, process.env.SECRET);
    return res.status(200).json({ user, message: "login success", token });
  })(req, res);
};

const signUp = async (ctx, req, res, next) => {
  const { db, jwt, bcrypt } = ctx;
  try {
    const hashedpassword = await bcrypt.hash(req.body.password, 10);
    const user = await db.User.create({
      ...req.body,
      password: hashedpassword,
    });
    const { id, email, firstName, lastName, phoneNumber } = user;
    const payload = { id, email, firstName, lastName, phoneNumber };
    const token = jwt.sign(payload, process.env.SECRET);
    return res
      .status(201)
      .json({ payload, message: "registration success", token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "error in registration" });
  }
};

const resetPassword = async (ctx, req, res, next) => {
  const { db, jwt, bcrypt } = ctx;
  try {
    const { new_password, confirm_password, email: uname } = req.body;
    const user = await db.User.findOne({ email: uname });
    const { id: userId, email, firstName, lastName } = user;
    if (confirm_password !== new_password) {
      res
        .status(400)
        .json({ message: "confirm password must be same as new password" });
    } else {
      const hashedpassword = await bcrypt.hash(new_password, 10);
      const data = { password: hashedpassword };
      const user = await db.User.update(data, { where: { email: uname } });
      if (Number(user)) {
        const payload = { id: userId, email, firstName, lastName };
        const token = jwt.sign(payload, process.env.SECRET);
        return res
          .status(201)
          .json({ token, message: "Password reset success" });
      } else {
        return res.status(400).json({ message: "Error in resetting password" });
      }
    }
  } catch (err) {
    next(err);
    return res.status(400).json({ message: "Error in resetting password" });
  }
};

module.exports = {
  login,
  signUp,
  resetPassword,
};
