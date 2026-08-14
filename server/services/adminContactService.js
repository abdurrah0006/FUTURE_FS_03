const {
  getContactMessages,
  getContactMessageById,
  updateContactMessageStatus,
  deleteContactMessage,
  getContactMessageStats
} = require(
  "../services/contactService"
);

const getMessagesController =
  async (req, res) => {
    try {
      const {
        search,
        status
      } = req.query;

      const messages =
        await getContactMessages({
          search,
          status
        });

      res.status(200).json({
        success: true,
        count: messages.length,
        data: messages
      });
    } catch (error) {
      console.error(
        "Get contact messages error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch contact messages"
      });
    }
  };

const getMessageController =
  async (req, res) => {
    try {
      const message =
        await getContactMessageById(
          req.params.id
        );

      if (!message) {
        return res.status(404).json({
          success: false,
          message:
            "Contact message not found"
        });
      }

      res.status(200).json({
        success: true,
        data: message
      });
    } catch (error) {
      console.error(
        "Get contact message error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch contact message"
      });
    }
  };

const updateStatusController =
  async (req, res) => {
    try {
      const {
        status
      } = req.body;

      const allowedStatuses = [
        "new",
        "read",
        "replied",
        "archived"
      ];

      if (
        !allowedStatuses.includes(status)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid message status"
        });
      }

      const message =
        await updateContactMessageStatus(
          req.params.id,
          status
        );

      if (!message) {
        return res.status(404).json({
          success: false,
          message:
            "Contact message not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Message status updated successfully",
        data: message
      });
    } catch (error) {
      console.error(
        "Update contact status error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update message status"
      });
    }
  };

const deleteMessageController =
  async (req, res) => {
    try {
      const message =
        await deleteContactMessage(
          req.params.id
        );

      if (!message) {
        return res.status(404).json({
          success: false,
          message:
            "Contact message not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Contact message deleted successfully"
      });
    } catch (error) {
      console.error(
        "Delete contact message error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to delete contact message"
      });
    }
  };

const getStatsController =
  async (req, res) => {
    try {
      const stats =
        await getContactMessageStats();

      res.status(200).json({
        success: true,
        data: stats
      });
    } catch (error) {
      console.error(
        "Get contact stats error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch contact statistics"
      });
    }
  };

module.exports = {
  getMessagesController,
  getMessageController,
  updateStatusController,
  deleteMessageController,
  getStatsController
};