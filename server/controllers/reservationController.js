const {
  createReservation,
  getReservationById
} = require("../services/reservationService");

const createReservationController = async (req, res) => {
  try {
    const {
      customerName,
      phone,
      email,
      date,
      time,
      guests,
      specialRequest
    } = req.body;

    if (
      !customerName ||
      !phone ||
      !date ||
      !time ||
      !guests
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Name, phone, date, time and number of guests are required"
      });
    }

    const reservation =
      await createReservation({
        customerName,
        phone,
        email,
        date,
        time,
        guests,
        specialRequest
      });

    res.status(201).json({
      success: true,
      message: "Reservation request submitted successfully",
      data: reservation
    });
  } catch (error) {
    console.error(
      "Create reservation error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to create reservation"
    });
  }
};

const getReservationController = async (req, res) => {
  try {
    const { id } = req.params;

    const reservation =
      await getReservationById(id);

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found"
      });
    }

    res.status(200).json({
      success: true,
      data: reservation
    });
  } catch (error) {
    console.error(
      "Get reservation error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch reservation"
    });
  }
};

module.exports = {
  createReservationController,
  getReservationController
};