const {
  createContactMessage,
  getContactMessageById
} = require("../services/contactService");

const createContactMessageController = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email and message are required"
      });
    }

    const contactMessage =
      await createContactMessage({
        name,
        email,
        phone,
        subject,
        message
      });

    res.status(201).json({
      success: true,
      message:
        "Your message has been sent successfully",
      data: {
        id: contactMessage._id
      }
    });
  } catch (error) {
    console.error(
      "Create contact message error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to send message"
    });
  }
};

const getContactMessageController = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const contactMessage =
      await getContactMessageById(id);

    if (!contactMessage) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found"
      });
    }

    res.status(200).json({
      success: true,
      data: contactMessage
    });
  } catch (error) {
    console.error(
      "Get contact message error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch contact message"
    });
  }
};

module.exports = {
  createContactMessageController,
  getContactMessageController
};