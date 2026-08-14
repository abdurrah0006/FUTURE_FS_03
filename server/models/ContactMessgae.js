const mongoose = require("mongoose");

const contactMessageSchema = new mongoose.Schema(
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
      trim: true,
      maxlength: 30,
      default: ""
    },

    subject: {
      type: String,
      trim: true,
      maxlength: 200,
      default: ""
    },

    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000
    },

    status: {
      type: String,
      enum: [
        "unread",
        "read",
        "replied",
        "archived"
      ],
      default: "unread"
    }
  },
  {
    timestamps: true
  }
);

contactMessageSchema.index({ status: 1 });
contactMessageSchema.index({ createdAt: -1 });

module.exports = mongoose.model(
  "ContactMessage",
  contactMessageSchema
);