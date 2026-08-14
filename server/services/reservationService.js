const Reservation = require("../models/Reservation");

const createReservation = async (reservationData) => {
  const reservation = await Reservation.create(
    reservationData
  );

  return reservation;
};

const getReservationById = async (id) => {
  const reservation = await Reservation.findById(id);

  return reservation;
};

module.exports = {
  createReservation,
  getReservationById
};