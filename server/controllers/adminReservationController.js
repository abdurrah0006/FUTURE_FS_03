const {
  getAdminReservations,
  getAdminReservationById,
  updateReservationStatus,
  updateReservation,
  deleteReservation
} = require("../services/adminReservationService");

const getReservationsController = async (
  req,
  res
) => {
  try {
    const {
      search,
      status,
      date
    } = req.query;

    const reservations =
      await getAdminReservations({
        search,
        status,
        date
      });

    res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations
    });
  } catch (error) {
    console.error(
      "Get admin reservations error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch reservations"
    });
  }
};

const getReservationController = async (
  req,
  res
) => {
  try {
    const reservation =
      await getAdminReservationById(
        req.params.id
      );

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
      message:
        "Failed to fetch reservation"
    });
  }
};

const updateReservationStatusController =
  async (req, res) => {
    try {
      const { status } = req.body;

      const allowedStatuses = [
        "pending",
        "confirmed",
        "completed",
        "cancelled",
        "rejected"
      ];

      if (
        !status ||
        !allowedStatuses.includes(status)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid reservation status"
        });
      }

      const reservation =
        await updateReservationStatus(
          req.params.id,
          status
        );

      if (!reservation) {
        return res.status(404).json({
          success: false,
          message: "Reservation not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Reservation status updated successfully",
        data: reservation
      });
    } catch (error) {
      console.error(
        "Update reservation status error:",
        error
      );

      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };

const updateReservationController =
  async (req, res) => {
    try {
      const reservation =
        await updateReservation(
          req.params.id,
          req.body
        );

      if (!reservation) {
        return res.status(404).json({
          success: false,
          message: "Reservation not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Reservation updated successfully",
        data: reservation
      });
    } catch (error) {
      console.error(
        "Update reservation error:",
        error
      );

      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };

const deleteReservationController =
  async (req, res) => {
    try {
      const reservation =
        await deleteReservation(
          req.params.id
        );

      if (!reservation) {
        return res.status(404).json({
          success: false,
          message: "Reservation not found"
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Reservation deleted successfully"
      });
    } catch (error) {
      console.error(
        "Delete reservation error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to delete reservation"
      });
    }
  };

module.exports = {
  getReservationsController,
  getReservationController,
  updateReservationStatusController,
  updateReservationController,
  deleteReservationController
};