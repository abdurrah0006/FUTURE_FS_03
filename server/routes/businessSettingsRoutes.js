const express = require("express");

const {
  getBusinessSettingsController
} = require("../controllers/businessSettingsController");

const router = express.Router();

router.get("/", getBusinessSettingsController);

module.exports = router;