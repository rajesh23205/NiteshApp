const mongoose = require("mongoose");

const ProductDataSchema = mongoose.Schema({
  productName: { type: String, required: true },
  wishlistStatus: { type: String, required: true },
  rating: { type: String, required: true },
  reviewNumber: { type: String, required: true },
  basePrice: { type: String, required: true },
  finalPrice: { type: String, required: true },
  categoryId: { type: String, required: true },
  discountPercent: { type: String, required: true },
  availability: { type: String, required: true },
  created_at: { type: String, required: true },
  updated_at: { type: String, required: true },
  status: { type: String, required: true },
  filename: { type: [String], required: true },
  filePath: { type: [String], required: true },
});

module.exports = ProductDataModel = mongoose.model(
  "ProductDataModel",
  ProductDataSchema
);
