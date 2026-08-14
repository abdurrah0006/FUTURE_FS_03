const Review = require("../models/Review");

const getReviews = async (filters = {}) => {
  return await Review.find({
    status: "approved",
    ...filters
  }).sort({ createdAt: -1 });
};

const getFeaturedReviews = async () => {
  return await Review.find({
    status: "approved",
    featured: true
  }).sort({ createdAt: -1 });
};

const getReviewById = async (id) => {
  return await Review.findOne({
    _id: id,
    status: "approved"
  });
};

const createReview = async (reviewData) => {
  return await Review.create({
    ...reviewData,
    status: "pending",
    verified: false,
    featured: false
  });
};

const getReviewSummary = async () => {
  const reviews = await Review.find({
    status: "approved"
  }).select("rating");

  const totalReviews = reviews.length;

  if (totalReviews === 0) {
    return {
      rating: 0,
      totalReviews: 0,
      breakdown: [
        { stars: 5, percentage: 0 },
        { stars: 4, percentage: 0 },
        { stars: 3, percentage: 0 },
        { stars: 2, percentage: 0 },
        { stars: 1, percentage: 0 }
      ]
    };
  }

  const ratingTotal = reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );

  const rating = Number(
    (ratingTotal / totalReviews).toFixed(1)
  );

  const breakdown = [5, 4, 3, 2, 1].map((stars) => {
    const count = reviews.filter(
      (review) => review.rating === stars
    ).length;

    return {
      stars,
      percentage: Math.round(
        (count / totalReviews) * 100
      )
    };
  });

  return {
    rating,
    totalReviews,
    breakdown
  };
};

module.exports = {
  getReviews,
  getFeaturedReviews,
  getReviewById,
  createReview,
  getReviewSummary
};