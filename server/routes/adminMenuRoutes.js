const express = require("express");

const {
  getMenuItemsController,
  getMenuItemController,
  createMenuItemController,
  updateMenuItemController,
  deleteMenuItemController,
  toggleAvailabilityController,
  toggleFeaturedController
} = require("../controllers/adminMenuController");

const adminAuthMiddleware = require(
  "../middleware/adminAuthMiddleware"
);

const router = express.Router();

router.use(adminAuthMiddleware);

router.get(
  "/",
  getMenuItemsController
);

router.get(
  "/:id",
  getMenuItemController
);

router.post(
  "/",
  createMenuItemController
);

router.put(
  "/:id",
  updateMenuItemController
);

router.delete(
  "/:id",
  deleteMenuItemController
);

router.patch(
  "/:id/availability",
  toggleAvailabilityController
);

router.patch(
  "/:id/featured",
  toggleFeaturedController
);

module.exports = router;