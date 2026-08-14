const {
  getActiveOffers,
  getFeaturedOffers,
  getOffersByAudience,
  getOfferById
} = require("../services/offerService");

const getOffersController = async (req, res) => {
  try {
    const offers = await getActiveOffers();

    res.status(200).json({
      success: true,
      count: offers.length,
      data: offers
    });
  } catch (error) {
    console.error("Get offers error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch offers"
    });
  }
};

const getFeaturedOffersController = async (
  req,
  res
) => {
  try {
    const offers = await getFeaturedOffers();

    res.status(200).json({
      success: true,
      count: offers.length,
      data: offers
    });
  } catch (error) {
    console.error(
      "Get featured offers error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch featured offers"
    });
  }
};

const getOffersByAudienceController = async (
  req,
  res
) => {
  try {
    const { audience } = req.params;

    const allowedAudiences = [
      "students",
      "everyone",
      "remote-workers",
      "members",
      "custom"
    ];

    if (!allowedAudiences.includes(audience)) {
      return res.status(400).json({
        success: false,
        message: "Invalid target audience"
      });
    }

    const offers =
      await getOffersByAudience(audience);

    res.status(200).json({
      success: true,
      count: offers.length,
      data: offers
    });
  } catch (error) {
    console.error(
      "Get audience offers error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch audience offers"
    });
  }
};

const getOfferByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const offer = await getOfferById(id);

    if (!offer) {
      return res.status(404).json({
        success: false,
        message: "Offer not found or inactive"
      });
    }

    res.status(200).json({
      success: true,
      data: offer
    });
  } catch (error) {
    console.error(
      "Get offer error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch offer"
    });
  }
};

module.exports = {
  getOffersController,
  getFeaturedOffersController,
  getOffersByAudienceController,
  getOfferByIdController
};