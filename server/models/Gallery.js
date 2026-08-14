const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150
    },

    category: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },

    image: {
      type: String,
      required: true,
      trim: true
    },

    size: {
      type: String,
      enum: [
        "small",
        "normal",
        "medium",
        "large",
        "tall"
      ],
      default: "normal"
    },

    description: {
      type: String,
      trim: true,
      maxlength: 500,
      default: ""
    },

    featured: {
      type: Boolean,
      default: false
    },

    active: {
      type: Boolean,
      default: true
    },

    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

gallerySchema.index({
  category: 1
});

gallerySchema.index({
  active: 1
});

gallerySchema.index({
  featured: 1
});

gallerySchema.index({
  order: 1
});

module.exports = mongoose.model(
  "Gallery",
  gallerySchema
);