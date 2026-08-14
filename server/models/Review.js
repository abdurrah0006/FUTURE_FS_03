const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },

    role: {
      type: String,
      trim: true,
      maxlength: 100,
      default: ""
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },

    reviewText: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000
    },

    avatar: {
      type: String,
      trim: true,
      default: ""
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      maxlength: 150,
      default: ""
    },

    verified: {
      type: Boolean,
      default: false
    },

    featured: {
      type: Boolean,
      default: false
    },

    status: {
      type: String,
      enum: [
        "pending",
        "approved",
        "rejected"
      ],
      default: "pending"
    },

    adminNote: {
      type: String,
      trim: true,
      maxlength: 500,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

reviewSchema.index({
  status: 1
});

reviewSchema.index({
  featured: 1
});

reviewSchema.index({
  rating: 1
});

reviewSchema.index({
  createdAt: -1
});

module.exports = mongoose.model(
  "Review",
  reviewSchema
);