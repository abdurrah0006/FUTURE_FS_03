import { motion } from "framer-motion";
import "./InnerHero.css";

const InnerHero = ({ eyebrow, title, description, image }) => {
  return (
    <section className="inner-hero">
      <div className="inner-hero-image">
        <img src={image} alt="" />
      </div>

      <div className="inner-hero-overlay" />

      <div className="container inner-hero-container">
        <motion.div
          className="inner-hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {eyebrow && <span className="inner-hero-eyebrow">{eyebrow}</span>}

          <h1>{title}</h1>

          {description && <p>{description}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default InnerHero;