const Offer = require("../models/Offer");

const getActiveOffers = async () => {
  const now = new Date();

  return await Offer.find({
    active: true,
    $and: [
      {
        $or: [
          { startDate: null },
          { startDate: { $lte: now } }
        ]
      },
      {
        $or: [
          { endDate: null },
          { endDate: { $gte: now } }
        ]
      }
    ]
  }).sort({
    featured: -1,
    createdAt: -1
  });
};

const getFeaturedOffers = async () => {
  const now = new Date();

  return await Offer.find({
    active: true,
    featured: true,
    $and: [
      {
        $or: [
          { startDate: null },
          { startDate: { $lte: now } }
        ]
      },
      {
        $or: [
          { endDate: null },
          { endDate: { $gte: now } }
        ]
      }
    ]
  }).sort({
    createdAt: -1
  });
};

const getOffersByAudience = async (audience) => {
  const now = new Date();

  return await Offer.find({
    active: true,
    targetAudience: audience.toLowerCase(),
    $and: [
      {
        $or: [
          { startDate: null },
          { startDate: { $lte: now } }
        ]
      },
      {
        $or: [
          { endDate: null },
          { endDate: { $gte: now } }
        ]
      }
    ]
  }).sort({
    featured: -1,
    createdAt: -1
  });
};

const getOfferById = async (id) => {
  const now = new Date();

  return await Offer.findOne({
    _id: id,
    active: true,
    $and: [
      {
        $or: [
          { startDate: null },
          { startDate: { $lte: now } }
        ]
      },
      {
        $or: [
          { endDate: null },
          { endDate: { $gte: now } }
        ]
      }
    ]
  });
};

module.exports = {
  getActiveOffers,
  getFeaturedOffers,
  getOffersByAudience,
  getOfferById
};