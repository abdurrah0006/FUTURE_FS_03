const Reservation = require("../models/Reservation");

const getAdminReservations = async ({
  search,
  status,
  date
} = {}) => {
  const filter = {};

  if (search) {
    filter.$or = [
      {
        name: {
          $regex: search,
          $options: "i"
        }
      },
      {
        email: {
          $regex: search,
          $options: "i"
        }
      },
      {
        phone: {
          $regex: search,
          $options: "i"
        }
      }
    ];
  }

  if (status && status !== "all") {
    filter.status = status;
  }

  if (date) {
    const startDate = new Date(date);

    const endDate = new Date(date);

    endDate.setDate(
      endDate.getDate() + 1
    );

    filter.date = {
      $gte: startDate,
      $lt: endDate
    };
  }

  return await Reservation.find(filter)
    .sort({
      date: 1,
      createdAt: -1
    });
};

const getAdminReservationById = async (
  id
) => {
  return await Reservation.findById(id);
};

const updateReservationStatus = async (
  id,
  status
) => {
  return await Reservation.findByIdAndUpdate(
    id,
    { status },
    {
      new: true,
      runValidators: true
    }
  );
};

const updateReservation = async (
  id,
  reservationData
) => {
  return await Reservation.findByIdAndUpdate(
    id,
    reservationData,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteReservation = async (
  id
) => {
  return await Reservation.findByIdAndDelete(
    id
  );
};

module.exports = {
  getAdminReservations,
  getAdminReservationById,
  updateReservationStatus,
  updateReservation,
  deleteReservation
};