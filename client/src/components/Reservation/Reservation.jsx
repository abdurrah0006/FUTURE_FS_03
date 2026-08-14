import { motion } from "framer-motion";
import { FiArrowRight, FiMessageCircle, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../Shared/Container/Container";
import { reservationData } from "../../data/reservationData";
import "./Reservation.css";

const Reservation = () => {
  const whatsappUrl = `https://wa.me/${reservationData.whatsappNumber}`;

  return (
    <section className="reservation-cta">
      <div className="reservation-cta-background">
        <img
          src="/images/home/reservation-bg.png"
          alt=""
          loading="lazy"
        />
      </div>

      <div className="reservation-cta-overlay" />

      <Container>
        <motion.div
          className="reservation-cta-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="reservation-cta-eyebrow">
            {reservationData.eyebrow}
          </span>

          <h2>{reservationData.title}</h2>

          <p>{reservationData.description}</p>

          <div className="reservation-cta-actions">
            <Link
              to="/reservation"
              className="reservation-cta-primary"
            >
              {reservationData.primaryButton}
              <FiArrowRight />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reservation-cta-secondary"
            >
              <FiMessageCircle />
              {reservationData.secondaryButton}
            </a>
          </div>

          <div className="reservation-cta-note">
            <span>{reservationData.note}</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Reservation;