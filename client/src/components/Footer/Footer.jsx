import {  FiArrowUpRight, FiFacebook, FiInstagram, FiMail, FiMapPin, FiMessageCircle, FiPhone, FiTwitter} from "react-icons/fi";
import { Link } from "react-router-dom";
import { footerData } from "../../data/footerData";
import "./Footer.css";

const Footer = () => {
  const whatsappUrl = `https://wa.me/${footerData.contact.whatsapp}`;

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                MrBean<span>.</span>
              </Link>

              <p>{footerData.description}</p>

              <div className="footer-socials">
                <a
                  href={footerData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>

                <a
                  href={footerData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FiFacebook />
                </a>

                <a
                  href={footerData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FiTwitter />
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Explore</h3>

              <ul>
                {footerData.navigation.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3>Quick Actions</h3>

              <ul>
                {footerData.services.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path}>
                      {item.label}
                      <FiArrowUpRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column footer-contact">
              <h3>Visit Us</h3>

              <a
                href="https://maps.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMapPin />
                <span>{footerData.contact.address}</span>
              </a>

              <a href={`tel:${footerData.contact.phone}`}>
                <FiPhone />
                <span>{footerData.contact.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMessageCircle />
                <span>WhatsApp</span>
              </a>

              <a href={`mailto:${footerData.contact.email}`}>
                <FiMail />
                <span>{footerData.contact.email}</span>
              </a>
            </div>
          </div>

          <div className="footer-hours">
            <div>
              <span className="footer-hours-label">Opening Hours</span>

              <div className="footer-hours-list">
                {footerData.hours.map((item) => (
                  <span key={item.day}>
                    <strong>{item.day}</strong>
                    {item.time}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/reservation" className="footer-reservation">
              Reserve a Table
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <p>© {new Date().getFullYear()} MrBean. All rights reserved.</p>

          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;