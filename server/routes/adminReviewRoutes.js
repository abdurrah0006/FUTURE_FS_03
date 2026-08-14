const express = require("express");

const {
  getReviewsController,
  getReviewController,
  updateReviewStatusController,
  updateReviewController,
  toggleFeaturedController,
  toggleVerifiedController,
  deleteReviewController
} = require(
  "../controllers/adminReviewController"
);

const adminAuthMiddleware = require(
  "../middleware/adminAuthMiddleware"
);

const router = express.Router();

router.use(adminAuthMiddleware);

router.get(
  "/",
  getReviewsController
);

router.get(
  "/:id",
  getReviewController
);

router.patch(
  "/:id/status",
  updateReviewStatusController
);

router.patch(
  "/:id/featured",
  toggleFeaturedController
);

router.patch(
  "/:id/verified",
  toggleVerifiedController
);

router.put(
  "/:id",
  updateReviewController
);

router.delete(
  "/:id",
  deleteReviewController
);

module.exports = router;