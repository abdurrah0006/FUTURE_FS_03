import { motion } from "framer-motion";
import { FiArrowRight, FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/images/home/mrbean-hero.png" alt="Warm coffee and cozy interior at MrBean" />
      </div>

      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-eyebrow">
            <FiCoffee />
            Your neighbourhood coffee space
          </span>

          <h1>More Than Coffee—Your Favourite Place to Study, Work & Relax.</h1>

          <p>
            Specialty coffee, fresh desserts and a cozy space designed for
            good conversations, focused work and slow afternoons.
          </p>

          <div className="hero-actions">
            <Link to="/reservation" className="btn btn-primary">
              Reserve a Table
              <FiArrowRight />
            </Link>

            <Link to="/menu" className="btn btn-light">
              Explore Menu
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="hero-scroll-line"></span>
      </div>
    </section>
  );
};

export default Hero;