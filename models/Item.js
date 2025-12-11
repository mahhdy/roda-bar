const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name_en: String,
  name_fr: String,
  description_en: String,
  description_fr: String,
  price: Number,
  category: String,
  spice: Number,
  tags: [String],
  available: { type: Boolean, default: true },
  images: [String],
  options: Object
});

module.exports = mongoose.model("Item", itemSchema);
