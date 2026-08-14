const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 150
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30
    },

    date: {
      type: Date,
      required: true
    },

    time: {
      type: String,
      required: true,
      trim: true
    },

    guests: {
      type: Number,
      required: true,
      min: 1,
      max: 50
    },

    occasion: {
      type: String,
      trim: true,
      maxlength: 100,
      default: ""
    },

    message: {
      type: String,
      trim: true,
      maxlength: 500,
      default: ""
    },

    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "completed",
        "cancelled",
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

reservationSchema.index({
  date: 1,
  status: 1
});

reservationSchema.index({
  email: 1
});

reservationSchema.index({
  phone: 1
});

reservationSchema.index({
  status: 1
});

module.exports = mongoose.model(
  "Reservation",
  reservationSchema
);