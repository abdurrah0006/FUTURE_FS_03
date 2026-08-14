const {
  getAdminReviews,
  getAdminReviewById,
  updateReviewStatus,
  updateReview,
  toggleReviewFeatured,
  toggleReviewVerified,
  deleteReview
} = require("../services/adminReviewService");

const getReviewsController = async (
  req,
  res
) => {
  try {
    const {
      search,
      status,
      rating,
      featured
    } = req.query;

    const reviews =
      await getAdminReviews({
        search,
        status,
        rating,
        featured:
          featured !== undefined
            ? featured === "true"
            : undefined
      });

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    });
  } catch (error) {
    console.error(
      "Get admin reviews error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews"
    });
  }
};

const getReviewController = async (
  req,
  res
) => {
  try {
    const review =
      await getAdminReviewById(
        req.params.id
      );

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

const updateReviewStatusController =
  async (req, res) => {
    try {
      const { status } = req.body;

      const allowedStatuses = [
        "pending",
        "approved",
        "rejected"
      ];

      if (
        !status ||
        !allowedStatuses.includes(status)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid review status"
        });
      }

      const review =
        await updateReviewStatus(
          req.params.id,
          status
        );

      if (!review) {
        return res.status(404).json({
          success: false,
          message: "Review not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Review status updated successfully",
        data: review
      });
    } catch (error) {
      console.error(
        "Update review status error:",
        error
      );

      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };

const updateReviewController = async (
  req,
  res
) => {
  try {
    const review =
      await updateReview(
        req.params.id,
        req.body
      );

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found"
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Review updated successfully",
      data: review
    });
  } catch (error) {
    console.error(
      "Update review error:",
      error
    );

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const toggleFeaturedController =
  async (req, res) => {
    try {
      const review =
        await toggleReviewFeatured(
          req.params.id
        );

      if (!review) {
        return res.status(404).json({
          success: false,
          message: "Review not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Featured status updated successfully",
        data: review
      });
    } catch (error) {
      console.error(
        "Toggle featured review error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update featured status"
      });
    }
  };

const toggleVerifiedController =
  async (req, res) => {
    try {
      const review =
        await toggleReviewVerified(
          req.params.id
        );

      if (!review) {
        return res.status(404).json({
          success: false,
          message: "Review not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Verification status updated successfully",
        data: review
      });
    } catch (error) {
      console.error(
        "Toggle verified review error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to update verification"
      });
    }
  };

const deleteReviewController = async (
  req,
  res
) => {
  try {
    const review =
      await deleteReview(
        req.params.id
      );

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found"
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Review deleted successfully"
    });
  } catch (error) {
    console.error(
      "Delete review error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to delete review"
    });
  }
};

module.exports = {
  getReviewsController,
  getReviewController,
  updateReviewStatusController,
  updateReviewController,
  toggleFeaturedController,
  toggleVerifiedController,
  deleteReviewController
};