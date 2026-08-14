import { motion } from "framer-motion";
import {
  FiCheck,
  FiClock,
  FiCoffee,
  FiUsers
} from "react-icons/fi";
import { reservationPolicies } from "../../../data/reservationData";
import "./ReservationInfo.css";

const ReservationInfo = () => {
  const features = [
    {
      icon: <FiCoffee />,
      title: "Your Favourite Spot",
      text: "Reserve a comfortable table before you arrive."
    },
    {
      icon: <FiClock />,
      title: "Save Time",
      text: "Skip the wait and settle in when you arrive."
    },
    {
      icon: <FiUsers />,
      title: "Bring Your People",
      text: "Book a table for friends, family or your study group."
    }
  ];

  return (
    <div className="reservation-info">
      <div className="reservation-info-heading">
        <span className="section-eyebrow">
          Plan Your Visit
        </span>

        <h2>Make yourself at home.</h2>

        <p>
          Whether you're meeting friends, studying or simply
          enjoying your coffee, reserve your preferred table
          before you arrive.
        </p>
      </div>

      <div className="reservation-features">
        {features.map((feature, index) => (
          <motion.div
            className="reservation-feature"
            key={feature.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: Math.min(index * 0.08, 0.25)
            }}
          >
            <span className="reservation-feature-icon">
              {feature.icon}
            </span>

            <div>
              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="reservation-policies">
        <h3>Good to know</h3>

        {reservationPolicies.map((policy) => (
          <div
            className="reservation-policy"
            key={policy}
          >
            <FiCheck />
            <span>{policy}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationInfo;