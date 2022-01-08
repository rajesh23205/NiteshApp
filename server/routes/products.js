var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');
// const productSchema = require("../schema/productModal");

router.get('/', (req, res) => {
    res.send('Hello World!!!')
})

const movieSchema = {
    name:String
  }
  
const Movies = mongoose.model('movies', movieSchema);

const productSchema = {
    name:String
  }
  
const Products = mongoose.model('products', productSchema);
  
// router.get('/movies', function(req, res) {
//     Products.find().then(movies => res.json(movies))
// })

// router.post("/signup", function(req, res, next){
//     var reqData = req.body;
//     console.log(reqData);
//     res.send(reqData)
//   })

router.post("/setProduct", function(req, res, next){
    var reqData = req.body;
    // console.log(reqData);
    // res.send(reqData);
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

  module.exports = router;