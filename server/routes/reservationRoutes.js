const express = require("express");

const {
  createReservationController,
  getReservationController
} = require("../controllers/reservationController");

const router = express.Router();

router.post("/", createReservationController);
router.get("/:id", getReservationController);

module.exports = router;