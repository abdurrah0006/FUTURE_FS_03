const express = require("express");

const {
  getReservationsController,
  getReservationController,
  updateReservationStatusController,
  updateReservationController,
  deleteReservationController
} = require(
  "../controllers/adminReservationController"
);

const adminAuthMiddleware = require(
  "../middleware/adminAuthMiddleware"
);

const router = express.Router();

router.use(adminAuthMiddleware);

router.get(
  "/",
  getReservationsController
);

router.get(
  "/:id",
  getReservationController
);

router.patch(
  "/:id/status",
  updateReservationStatusController
);

router.put(
  "/:id",
  updateReservationController
);

router.delete(
  "/:id",
  deleteReservationController
);

module.exports = router;