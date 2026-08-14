import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiMessageCircle
} from "react-icons/fi";
import { contactData } from "../../../data/contactData";
import "./ContactInfo.css";

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      value: contactData.address,
      link: contactData.mapsUrl,
      label: "Get Directions"
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      value: contactData.phone,
      link: `tel:${contactData.phone.replace(/\s/g, "")}`,
      label: "Call MrBean"
    },
    {
      icon: <FiMessageCircle />,
      title: "WhatsApp",
      value: "Chat with us",
      link: `https://wa.me/${contactData.whatsapp}`,
      label: "Message Us"
    },
    {
      icon: <FiMail />,
      title: "Email",
      value: contactData.email,
      link: `mailto:${contactData.email}`,
      label: "Send Email"
    }
  ];

  return (
    <div className="contact-info-grid">
      {contactItems.map((item, index) => (
        <motion.a
          key={item.title}
          href={item.link}
          target={item.title === "Visit Us" || item.title === "WhatsApp" ? "_blank" : undefined}
          rel={item.title === "Visit Us" || item.title === "WhatsApp" ? "noreferrer" : undefined}
          className="contact-info-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.45,
            delay: Math.min(index * 0.08, 0.3)
          }}
          whileHover={{ y: -5 }}
        >
          <span className="contact-info-icon">
            {item.icon}
          </span>

          <div className="contact-info-content">
            <span className="contact-info-title">
              {item.title}
            </span>

            <strong>{item.value}</strong>

            <span className="contact-info-link">
              {item.label}
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default ContactInfo;