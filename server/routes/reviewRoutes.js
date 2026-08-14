const express = require("express");

const {
  getReviewsController,
  getFeaturedReviewsController,
  getReviewByIdController,
  createReviewController,
  getReviewSummaryController
} = require("../controllers/reviewController");

const router = express.Router();

router.get("/summary", getReviewSummaryController);
router.get("/featured", getFeaturedReviewsController);
router.get("/:id", getReviewByIdController);
router.get("/", getReviewsController);
router.post("/", createReviewController);

module.exports = router;