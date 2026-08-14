const mongoose = require("mongoose");

const menuCategorySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    label: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("MenuCategory", menuCategorySchema);