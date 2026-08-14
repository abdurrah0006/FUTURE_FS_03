const express = require("express");

const {
  createContactMessageController,
  getContactMessageController
} = require("../controllers/contactController");

const router = express.Router();

router.post("/", createContactMessageController);
router.get("/:id", getContactMessageController);

module.exports = router;