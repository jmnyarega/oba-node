const file = ({ app, db, passport, formatParams, Op }) => {
  app
    .route("/file")
    .post(async (req, res) => {
      try {
        const data = req.body;
        const file = await db.File.create(data);
        res.status(201).json(file);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    })
    .get(async (_, res) => {
      try {
        const file = await db.File.findAll();
        res.status(201).json(file);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    })
    .delete(async (req, res) => {
      try {
        const { id } = req.query;
        const file = await db.File.destroy({ where: { id: id } });
        if (file === 1) {
          res.status(202).json({ message: "file deleted" });
        }
        res.status(404).json({ message: "file not found" });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });
};

module.exports = file;
