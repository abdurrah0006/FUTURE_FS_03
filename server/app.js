const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const menuRoutes = require("./routes/menuRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const contactRoutes = require("./routes/contactRoutes");
const offerRoutes = require("./routes/offerRoutes");
const businessSettingsRoutes = require("./routes/businessSettingsRoutes");
const adminAuthRoutes = require("./routes/adminAuthRoutes");
const adminDashboardRoutes = require("./routes/adminDashboardRoutes");
const adminMenuRoutes = require("./routes/adminMenuRoutes");
const adminReservationRoutes = require("./routes/adminReservationRoutes");
const adminReviewRoutes = require("./routes/adminReviewRoutes");
const adminGalleryRoutes = require("./routes/adminGalleryRoutes");

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MrBean API is running",
    environment: process.env.NODE_ENV
  });
});

app.use("/api/menu", menuRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/business-settings", businessSettingsRoutes);
app.use("/api/admin/auth", adminAuthRoutes);
app.use("/api/admin/dashboard", adminDashboardRoutes);
app.use("/api/admin/menu", adminMenuRoutes);
app.use("/api/admin/reservations", adminReservationRoutes);
app.use("/api/admin/reviews", adminReviewRoutes);
app.use("/api/admin/gallery", adminGalleryRoutes);

module.exports = app;