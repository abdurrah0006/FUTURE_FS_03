const mongoose = require("mongoose");

const galleryCategorySchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
      },

      slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
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

galleryCategorySchema.index({
  active: 1
});

galleryCategorySchema.index({
  order: 1
});

module.exports = mongoose.model(
  "GalleryCategory",
  galleryCategorySchema
);