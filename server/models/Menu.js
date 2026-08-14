const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },

    description: {
      type: String,
      trim: true,
      maxlength: 500,
      default: ""
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    image: {
      type: String,
      trim: true,
      default: ""
    },

    featured: {
      type: Boolean,
      default: false
    },

    available: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

menuSchema.index({ category: 1});
menuSchema.index({ featured: 1});
menuSchema.index({ available: 1});
module.exports = mongoose.model("Menu", menuSchema);