import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import InnerHero from "../../components/Shared/InnerHero/InnerHero";
import ContactInfo from "../../components/Contact/ContactInfo/ContactInfo";
import OpeningHours from "../../components/Contact/OpeningHours/OpeningHours";
import ContactForm from "../../components/Contact/ContactForm/ContactForm";
import Map from "../../components/Contact/Map/Map";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <InnerHero
        eyebrow="Find MrBean"
        title="Come Say Hello."
        description="Whether you're here for coffee, dessert, work or a quiet afternoon, we'd love to have you."
        image="/images/contact/contact-hero.png"
      />

      <section className="section contact-section">
        <div className="container">
          <div className="section-header contact-header">
            <span className="section-eyebrow">
              We'd Love To Hear From You
            </span>

            <h2 className="section-title">
              Your next coffee break starts here.
            </h2>

            <p className="section-description">
              Get in touch, find our location or simply drop by
              whenever you're nearby.
            </p>
          </div>

          <ContactInfo />
        </div>
      </section>

      <section className="section hours-section">
        <div className="container hours-container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <OpeningHours />
          </motion.div>

          <motion.div
            className="hours-message"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-eyebrow">
              Your Space Awaits
            </span>

            <h2>
              Stay for a coffee.
              <br />
              Stay for the atmosphere.
            </h2>

            <p>
              Bring your laptop, your books, your friends or
              simply yourself. MrBean is designed to be a place
              you don't have to rush through.
            </p>

            <Link
              to="/reservation"
              className="btn btn-primary"
            >
              Reserve a Table
              <FiArrowUpRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section contact-location-section">
        <div className="container">
          <div className="contact-location-grid">
            <ContactForm />

            <Map />
          </div>
        </div>
      </section>

      <section className="section contact-cta">
        <div className="container">
          <motion.div
            className="contact-cta-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div>
              <span className="section-eyebrow">
                Ready When You Are
              </span>

              <h2>
                Your table is waiting.
              </h2>

              <p>
                Skip the wait and reserve your favourite spot.
              </p>
            </div>

            <Link
              to="/reservation"
              className="btn btn-light"
            >
              Reserve a Table
              <FiArrowUpRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;