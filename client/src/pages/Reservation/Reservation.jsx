import { motion } from "framer-motion";
import InnerHero from "../../components/Shared/InnerHero/InnerHero";
import ReservationInfo from "../../components/Reservation/ReservationInfo/ReservationInfo";
import ReservationForm from "../../components/Reservation/ReservationForm/ReservationForm";
import "./Reservation.css";

const Reservation = () => {
  return (
    <div className="reservation-page">
      <InnerHero
        eyebrow="Reserve Your Table"
        title="Your Seat Is Waiting."
        description="Choose your time, bring your people and let us take care of the coffee."
        image="/images/reservation/reservation-hero.png"
      />

      <section className="section reservation-section">
        <div className="container">
          <div className="reservation-layout">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55 }}
            >
              <ReservationInfo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: 0.08
              }}
            >
              <ReservationForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;