const mongoose = require("mongoose");

const CategoryDataSchema = mongoose.Schema({
  categoryType: { type: String, required: true },
});

module.exports = CategoryDataModel = mongoose.model(
  "CategoryDataModel",
  CategoryDataSchema
);
