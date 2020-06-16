const company = ({ app, db, passport, formatParams, Op }) => {
  app
    .route("/company")
    .post(
      passport.authenticate("jwt", { session: false }),
      async (req, res) => {
        try {
          const data = req.body;
          const company = await db.Company.create(data);
          res.status(201).json(company);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
    )
    .get(passport.authenticate("jwt", { session: false }), async (_, res) => {
      try {
        const company = await db.Company.findAll();
        res.status(201).json(company);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    })
    .delete(
      passport.authenticate("jwt", { session: false }),
      async (req, res) => {
        try {
          const { id } = req.query;
          const company = await db.Company.destroy({ where: { id: id } });
          if (company === 1) {
            res.status(202).json({ message: "company deleted" });
          }
          res.status(404).json({ message: "company not found" });
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
    );
};

module.exports = company;
