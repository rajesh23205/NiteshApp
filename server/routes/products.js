var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const ProductDataModel = require("../schema/productModal");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.send("Hello World!!!");
});

const movieSchema = {
  name: String,
};

const Movies = mongoose.model("movies", movieSchema);

router.get("/movies", function (req, res) {
  Movies.find().then((movies) => res.json(movies));
});

router.post(
  "/setProduct",
  upload.array("productImage", 6),
  function (req, res, next) {
    console.log("reqData", req.files);
    var reqData = req.body;
    let filename = [];
    let filePath = [];
    req.files.forEach((file) => {
      filename.push(file.filename);
      filePath.push(file.path);
    });
    reqData.filename = filename;
    reqData.filePath = filePath;
    console.log("filename", filename);
    console.log("filePath", filePath);
    console.log("reqData.filename", reqData.filename);
    console.log("reqData.filePath", reqData.filePath);
    var productSchema = new ProductDataModel(reqData);
    productSchema.save(function (error) {
      if (error) {
        console.log("error " + error);
        res.json({ res: "error" });
      } else {
        res.json({ res: "success" });
      }
    });
  }
);

router.get("/getProduct", function (req, res) {
  ProductDataModel.find().then((movies) => res.json(movies));
});

module.exports = router;
