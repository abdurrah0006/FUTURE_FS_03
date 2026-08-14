const express = require("express");

const {
  getMessagesController,
  getMessageController,
  updateStatusController,
  deleteMessageController,
  getStatsController
} = require(
  "../controllers/adminContactController"
);

const adminAuthMiddleware = require(
  "../middleware/adminAuthMiddleware"
);

const router = express.Router();

router.use(adminAuthMiddleware);

router.get(
  "/stats",
  getStatsController
);

router.get(
  "/",
  getMessagesController
);

router.get(
  "/:id",
  getMessageController
);

router.patch(
  "/:id/status",
  updateStatusController
);

router.delete(
  "/:id",
  deleteMessageController
);

module.exports = router;