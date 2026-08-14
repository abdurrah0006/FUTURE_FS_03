import { FiClock, FiMail, FiMapPin, FiMessageCircle, FiPhone, FiArrowRight } from "react-icons/fi";
import Container from "../Shared/Container/Container";
import Section from "../Shared/Section/Section";
import { contactDataHome } from "../../data/contactData";
import "./Contact.css";

const Contact = () => {
  const whatsappUrl = `https://wa.me/${contactDataHome.whatsapp}`;

  return (
    <Section className="contact-section">
      <Container>
        <div className="contact-layout">
          <div className="contact-info">
            <span className="contact-eyebrow">Visit MrBean</span>

            <h2>Come Say Hello.</h2>

            <p className="contact-description">
              Whether you're stopping by for your morning coffee, getting some
              work done or meeting friends, we'd love to have you.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <FiMapPin />
                </div>

                <div>
                  <span>Address</span>
                  <a
                    href={contactDataHome.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactDataHome.address}
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <FiPhone />
                </div>

                <div>
                  <span>Phone</span>
                  <a href={`tel:${contactDataHome.phone}`}>
                    {contactDataHome.phone}
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <FiMessageCircle />
                </div>

                <div>
                  <span>WhatsApp</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <FiMail />
                </div>

                <div>
                  <span>Email</span>
                  <a href={`mailto:${contactDataHome.email}`}>
                    {contactDataHome.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-hours">
              <div className="contact-hours-heading">
                <FiClock />
                <span>Opening Hours</span>
              </div>

              <div className="contact-hours-list">
                {contactDataHome.openingHours.map((item) => (
                  <div className="contact-hours-row" key={item.day}>
                    <span>{item.day}</span>
                    <strong>{item.time}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-map-wrapper">
            <div className="contact-map">
              <iframe
                title="MrBean location"
                src={`https://www.google.com/maps?q=${contactDataHome.coordinates.latitude},${contactDataHome.coordinates.longitude}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={contactDataHome.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-directions"
            >
              Get Directions
              <FiArrowRight />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;