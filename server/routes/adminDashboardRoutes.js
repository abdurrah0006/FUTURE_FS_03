const express = require("express");

const {
  getDashboardStatsController
} = require("../controllers/adminDashboardController");

const adminAuthMiddleware = require(
  "../middleware/adminAuthMiddleware"
);

const router = express.Router();

router.get(
  "/",
  adminAuthMiddleware,
  getDashboardStatsController
);

module.exports = router;