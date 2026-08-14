const Review = require("../models/Review");

const getAdminReviews = async ({
  search,
  status,
  rating,
  featured
} = {}) => {
  const filter = {};

  if (search) {
    filter.$or = [
      {
        name: {
          $regex: search,
          $options: "i"
        }
      },
      {
        reviewText: {
          $regex: search,
          $options: "i"
        }
      }
    ];
  }

  if (status && status !== "all") {
    filter.status = status;
  }

  if (rating) {
    filter.rating = Number(rating);
  }

  if (featured !== undefined) {
    filter.featured = featured;
  }

  return await Review.find(filter).sort({
    createdAt: -1
  });
};

const getAdminReviewById = async (id) => {
  return await Review.findById(id);
};

const updateReviewStatus = async (
  id,
  status
) => {
  return await Review.findByIdAndUpdate(
    id,
    { status },
    {
      new: true,
      runValidators: true
    }
  );
};

const updateReview = async (
  id,
  reviewData
) => {
  return await Review.findByIdAndUpdate(
    id,
    reviewData,
    {
      new: true,
      runValidators: true
    }
  );
};

const toggleReviewFeatured = async (
  id
) => {
  const review = await Review.findById(id);

  if (!review) {
    return null;
  }

  review.featured = !review.featured;

  return await review.save();
};

const toggleReviewVerified = async (
  id
) => {
  const review = await Review.findById(id);

  if (!review) {
    return null;
  }

  review.verified = !review.verified;

  return await review.save();
};

const deleteReview = async (id) => {
  return await Review.findByIdAndDelete(id);
};

module.exports = {
  getAdminReviews,
  getAdminReviewById,
  updateReviewStatus,
  updateReview,
  toggleReviewFeatured,
  toggleReviewVerified,
  deleteReview
};