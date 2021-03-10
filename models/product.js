const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: [{ type: String, required: true }],
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", Product);
