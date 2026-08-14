const express = require("express");

const {
  getOffersController,
  getFeaturedOffersController,
  getOffersByAudienceController,
  getOfferByIdController
} = require("../controllers/offerController");

const router = express.Router();

router.get("/featured", getFeaturedOffersController);
router.get(
  "/audience/:audience",
  getOffersByAudienceController
);
router.get("/:id", getOfferByIdController);
router.get("/", getOffersController);

module.exports = router;