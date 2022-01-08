const mongoose = require('mongoose');
const mongoUtil = require( '../mongoUtil' );
const db = mongoUtil.getDb();

const productSchema = new mongoose.Schema({
    productName:{ type:String, required:true },
})

module.exports = db.model("products", productSchema);