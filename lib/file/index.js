const file = ({ app, db, passport, cleanData, csv, upload, filename }) => {
  app
    .route("/transaction")
    .post(
      passport.authenticate("jwt", { session: false }),
      upload.single("selectedFile"),
      async (req, res) => {
        try {
          const { id } = req.body;
          csv()
            .fromFile(`./uploads/${filename}`)
            .then(function (jsonArrayObj) {
              db.Transactions.bulkCreate(cleanData(jsonArrayObj, id), {
                ignoreDuplicates: true,
              });
            });
          res.status(201).json({ message: "upload successful" });
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
    )
    .get(passport.authenticate("jwt", { session: false }), async (_, res) => {
      try {
        const transactions = await db.Transactions.findAll();
        res.status(201).json(transactions);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });
};

module.exports = file;
