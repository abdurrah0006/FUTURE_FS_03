const Menu = require("../models/Menu");
const Reservation = require("../models/Reservation");
const Review = require("../models/Review");
const Gallery = require("../models/Gallery");
const ContactMessage = require("../models/ContactMessage");
const Offer = require("../models/Offer");

const getDashboardStats = async () => {
  const [
    menuItems,
    reservations,
    reviews,
    galleryItems,
    contactMessages,
    offers,
    unreadMessages,
    pendingReservations,
    activeOffers
  ] = await Promise.all([
    Menu.countDocuments(),
    Reservation.countDocuments(),
    Review.countDocuments(),
    Gallery.countDocuments(),
    ContactMessage.countDocuments(),
    Offer.countDocuments(),

    ContactMessage.countDocuments({
      status: "unread"
    }),

    Reservation.countDocuments({
      status: "pending"
    }),

    Offer.countDocuments({
      active: true
    })
  ]);

  return {
    counts: {
      menuItems,
      reservations,
      reviews,
      galleryItems,
      contactMessages,
      offers
    },

    alerts: {
      unreadMessages,
      pendingReservations,
      activeOffers
    }
  };
};

module.exports = {
  getDashboardStats
};