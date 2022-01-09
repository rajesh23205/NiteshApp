var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');
const Products = require("../schema/productModal");

router.get('/', (req, res) => {
    res.send('Hello World!!!')
})

const movieSchema = {
    name:String
  }
  
const Movies = mongoose.model('movies', movieSchema);

router.get('/movies', function(req, res) {
  Movies.find().then(movies => res.json(movies))
})

router.post("/setProduct", function(req, res, next){
    var reqData = req.body;
    var productSchema = new Products(reqData);
    productSchema.save(function(error){
      if(error){
        console.log("error "+error);
        res.json({res:"error"});
      }else{
        res.json({res:"success"});
      }
    })
  })

  router.get('/getProduct', function(req, res) {
    Products.find().then(movies => res.json(movies))
  })

  module.exports = router;