// configure storage
const multer = require("multer");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const newFilename = `${Math.floor(Math.random() * 100000000000) + 1}`;
    cb(null, newFilename);
  },
});

module.exports = multerConfig;
