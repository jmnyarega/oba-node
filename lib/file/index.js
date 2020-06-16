const file = ({ app, db, passport, formatParams, Op, upload, filename }) => {
  const csv = require("csvtojson");
  const cleanData = (data) => {
    return data.map((x) => ({
      transaction: x.Transaction,
      status: x.Status,
      transaction_date: x["Transaction Date"],
      due_date: x["Due Date"],
      supplier: x["Customer or Supplier"],
      item: x.Item,
      quantity: x.Quantity,
      unit_amount: x["Unit Amount"],
      amount: x["Total Transaction Amount"],
    }));
  };
  app
    .route("/file")
    .post(upload.single("selectedFile"), async (req, res, test) => {
      try {
        const data = req.body;
        console.log(test);
        csv()
          .fromFile(`./uploads/${filename}`)
          .then(function (jsonArrayObj) {
            //when parse finished, result will be emitted here.
            db.Transactions.bulkCreate(cleanData(jsonArrayObj), {
              ignoreDuplicates: true,
            }).then((x) => console.log(x));
          });
        // const file = await db.File.create(data);
        res.status(201).json(data.file);
      } catch (error) {
        console.log(error);
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
