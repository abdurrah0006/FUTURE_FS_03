import { motion } from "framer-motion";
import { FiCalendar, FiCheck, FiClock, FiUsers} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ReservationSuccess.css";

const ReservationSuccess = ({
  reservation,
  onReset
}) => {
  return (
    <motion.div
      className="reservation-success"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div className="reservation-success-icon">
        <FiCheck />
      </div>

      <span className="section-eyebrow">
        Reservation Request Sent
      </span>

      <h2>You're on the list!</h2>

      <p>
        Thanks, {reservation.name}. We've received your
        reservation request and will confirm it shortly.
      </p>

      <div className="reservation-confirmation">
        <div>
          <FiCalendar />
          <span>{reservation.date}</span>
        </div>

        <div>
          <FiClock />
          <span>{reservation.time}</span>
        </div>

        <div>
          <FiUsers />
          <span>
            {reservation.guests}{" "}
            {Number(reservation.guests) === 1
              ? "Guest"
              : "Guests"}
          </span>
        </div>
      </div>

      <div className="reservation-success-actions">
        <Link
          to="/"
          className="btn btn-primary"
        >
          Back to Home
        </Link>

        <button
          type="button"
          className="btn btn-outline"
          onClick={onReset}
        >
          Make Another Reservation
        </button>
      </div>
    </motion.div>
  );
};

export default ReservationSuccess;