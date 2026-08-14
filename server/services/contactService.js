const ContactMessage = require("../models/ContactMessage");

const createContactMessage = async (messageData) => {
  return await ContactMessage.create(messageData);
};

const getContactMessageById = async (id) => {
  return await ContactMessage.findById(id);
};

module.exports = {
  createContactMessage,
  getContactMessageById
};