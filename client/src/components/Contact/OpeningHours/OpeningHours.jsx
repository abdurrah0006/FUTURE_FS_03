import { FiClock } from "react-icons/fi";
import { openingHours } from "../../../data/contactData";
import "./OpeningHours.css";

const OpeningHours = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long"
  });

  return (
    <div className="opening-hours">
      <div className="opening-hours-heading">
        <span className="opening-hours-icon">
          <FiClock />
        </span>

        <div>
          <span className="section-eyebrow">
            Come Visit
          </span>

          <h3>Opening Hours</h3>
        </div>
      </div>

      <div className="opening-hours-list">
        {openingHours.map((item) => (
          <div
            className={`opening-hours-row ${
              item.day === today ? "is-today" : ""
            }`}
            key={item.day}
          >
            <span>{item.day}</span>

            <span>{item.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpeningHours;