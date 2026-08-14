const mongoose = require("mongoose");

const openingHourSchema = new mongoose.Schema(
  {
    day: {
      type: String,
      required: true,
      trim: true
    },

    hours: {
      type: String,
      required: true,
      trim: true
    },

    closed: {
      type: Boolean,
      default: false
    }
  },
  {
    _id: false
  }
);

const businessSettingsSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150
    },

    address: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30
    },

    whatsapp: {
      type: String,
      trim: true,
      maxlength: 30,
      default: ""
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      maxlength: 150,
      default: ""
    },

    mapsUrl: {
      type: String,
      trim: true,
      default: ""
    },

    instagramUrl: {
      type: String,
      trim: true,
      default: ""
    },

    facebookUrl: {
      type: String,
      trim: true,
      default: ""
    },

    coordinates: {
      latitude: {
        type: Number,
        min: -90,
        max: 90
      },

      longitude: {
        type: Number,
        min: -180,
        max: 180
      }
    },

    openingHours: {
      type: [openingHourSchema],
      default: []
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model( "BusinessSettings", businessSettingsSchema);