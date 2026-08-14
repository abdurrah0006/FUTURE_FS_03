const {
  getReviews,
  getFeaturedReviews,
  getReviewById,
  createReview,
  getReviewSummary
} = require("../services/reviewService");

const getReviewsController = async (req, res) => {
  try {
    const reviews = await getReviews();

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    });
  } catch (error) {
    console.error("Get reviews error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews"
    });
  }
};

const getFeaturedReviewsController = async (req, res) => {
  try {
    const reviews = await getFeaturedReviews();

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    });
  } catch (error) {
    console.error(
      "Get featured reviews error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch featured reviews"
    });
  }
};

const getReviewByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await getReviewById(id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found"
      });
    }

    res.status(200).json({
      success: true,
      data: review
    });
  } catch (error) {
    console.error(
      "Get review error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch review"
    });
  }
};

const createReviewController = async (req, res) => {
  try {
    const {
      name,
      role,
      rating,
      reviewText,
      avatar
    } = req.body;

    if (!name || !role || !rating || !reviewText) {
      return res.status(400).json({
        success: false,
        message:
          "Name, role, rating and review text are required"
      });
    }

    const review = await createReview({
      name,
      role,
      rating,
      reviewText,
      avatar
    });

    res.status(201).json({
      success: true,
      message:
        "Review submitted and awaiting approval",
      data: review
    });
  } catch (error) {
    console.error(
      "Create review error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to submit review"
    });
  }
};

const getReviewSummaryController = async (req, res) => {
  try {
    const summary = await getReviewSummary();

    res.status(200).json({
      success: true,
      data: summary
    });
  } catch (error) {
    console.error(
      "Get review summary error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to generate review summary"
    });
  }
};

module.exports = {
  getReviewsController,
  getFeaturedReviewsController,
  getReviewByIdController,
  createReviewController,
  getReviewSummaryController
};