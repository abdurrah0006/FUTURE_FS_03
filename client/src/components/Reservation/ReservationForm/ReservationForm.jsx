import { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiUser,
  FiUsers
} from "react-icons/fi";
import {
  guestOptions,
  reservationTimes
} from "../../../data/reservationData";
import ReservationSuccess from "../ReservationSuccess/ReservationSuccess";
import "./ReservationForm.css";

const ReservationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    occasion: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      ...formData,
      status: "pending"
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <ReservationSuccess
        reservation={formData}
        onReset={() => {
          setSubmitted(false);

          setFormData({
            date: "",
            time: "",
            guests: "2",
            name: "",
            email: "",
            phone: "",
            occasion: "",
            message: ""
          });
        }}
      />
    );
  }

  return (
    <form
      className="reservation-form"
      onSubmit={handleSubmit}
    >
      <div className="reservation-form-heading">
        <span className="section-eyebrow">
          Reserve Your Table
        </span>

        <h2>Let's save you a seat.</h2>

        <p>
          Choose your preferred date and time below.
        </p>
      </div>

      <div className="reservation-form-section">
        <h3>Visit details</h3>

        <div className="reservation-form-row">
          <div className="form-field">
            <label htmlFor="reservation-date">
              <FiCalendar />
              Date
            </label>

            <input
              id="reservation-date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="reservation-time">
              <FiClock />
              Time
            </label>

            <select
              id="reservation-time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">
                Select time
              </option>

              {reservationTimes.map((time) => (
                <option
                  value={time}
                  key={time}
                >
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="reservation-guests">
            <FiUsers />
            Number of guests
          </label>

          <select
            id="reservation-guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          >
            {guestOptions.map((guest) => (
              <option
                value={guest}
                key={guest}
              >
                {guest} {guest === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="reservation-form-section">
        <h3>Your details</h3>

        <div className="reservation-form-row">
          <div className="form-field">
            <label htmlFor="reservation-name">
              <FiUser />
              Name
            </label>

            <input
              id="reservation-name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="reservation-phone">
              <FiPhone />
              Phone
            </label>

            <input
              id="reservation-phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="reservation-email">
            <FiMail />
            Email
          </label>

          <input
            id="reservation-email"
            name="email"
            type="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="reservation-occasion">
            Occasion
          </label>

          <select
            id="reservation-occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">
              Select an occasion
            </option>
            <option value="casual">
              Casual Visit
            </option>
            <option value="birthday">
              Birthday
            </option>
            <option value="date">
              Date
            </option>
            <option value="meeting">
              Meeting
            </option>
            <option value="study">
              Study Session
            </option>
            <option value="other">
              Other
            </option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="reservation-message">
            <FiMessageSquare />
            Special request
          </label>

          <textarea
            id="reservation-message"
            name="message"
            rows="4"
            placeholder="Anything you'd like us to know?"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary reservation-submit"
      >
        Confirm Reservation
      </button>

      <p className="reservation-form-note">
        Your reservation request will be reviewed and
        confirmed by MrBean.
      </p>
    </form>
  );
};

export default ReservationForm;