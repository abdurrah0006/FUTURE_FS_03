const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150
    },

    subtitle: {
      type: String,
      trim: true,
      maxlength: 200,
      default: ""
    },

    description: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: ""
    },

    type: {
      type: String,
      enum: ["percentage", "fixed", "special"],
      required: true
    },

    discountValue: {
      type: Number,
      min: 0,
      default: 0
    },

    code: {
      type: String,
      trim: true,
      uppercase: true,
      maxlength: 50,
      default: ""
    },

    image: {
      type: String,
      trim: true,
      default: ""
    },

    targetAudience: {
      type: String,
      enum: [
        "students",
        "everyone",
        "remote-workers",
        "members",
        "custom"
      ],
      default: "everyone"
    },

    startDate: {
      type: Date,
      default: null
    },

    endDate: {
      type: Date,
      default: null
    },

    featured: {
      type: Boolean,
      default: false
    },

    active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

offerSchema.index({ active: 1 });
offerSchema.index({ featured: 1 });
offerSchema.index({ targetAudience: 1 });
offerSchema.index({ startDate: 1, endDate: 1 });

module.exports = mongoose.model("Offer", offerSchema);