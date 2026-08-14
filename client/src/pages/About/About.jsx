
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCoffee, FiHeart, FiUsers } from "react-icons/fi";
import InnerHero from "../../components/Shared/InnerHero/InnerHero";
import "./About.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const About = () => {
  return (
    <div className="about-page">
      <InnerHero
        eyebrow="Our Story"
        title="More Than Just Coffee."
        description="A warm place to slow down, get things done, and enjoy good coffee with good people."
        image="/images/about/about-hero.png"
      />

      {/* Story */}
      <section className="section about-story">
        <div className="container about-story-grid">
          <motion.div
            className="about-story-image"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src="/images/about/about-story.png"
              alt="Inside MrBean café"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="about-story-content"
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="section-eyebrow">Our Story</span>

            <h2 className="section-title">
              A café built around everyday moments.
            </h2>

            <p>
              MrBean was created with a simple idea: coffee should be more
              than something you grab on the way somewhere.
            </p>

            <p>
              It should be a reason to pause, meet someone, finish a project,
              read a few pages, or simply enjoy a quiet moment.
            </p>

            <p>
              That's why we've created a space where specialty coffee,
              thoughtful food, comfortable surroundings, and community come
              together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <motion.div
            className="section-header"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="section-eyebrow">What We Believe</span>

            <h2 className="section-title">
              Simple things, done well.
            </h2>

            <p className="section-description">
              Everything at MrBean is designed around creating a better café
              experience, from the first sip to the last conversation.
            </p>
          </motion.div>

          <div className="about-values-grid">
            <motion.article
              className="about-value-card"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <div className="about-value-icon">
                <FiCoffee />
              </div>

              <h3>Good Coffee</h3>

              <p>
                Carefully prepared coffee made with quality ingredients and
                attention to detail.
              </p>
            </motion.article>

            <motion.article
              className="about-value-card"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="about-value-icon">
                <FiHeart />
              </div>

              <h3>A Warm Space</h3>

              <p>
                A comfortable environment where you can relax, study, work,
                or simply take a break.
              </p>
            </motion.article>

            <motion.article
              className="about-value-card"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <div className="about-value-icon">
                <FiUsers />
              </div>

              <h3>Our Community</h3>

              <p>
                A welcoming place for students, professionals, friends, and
                coffee lovers to connect.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Coffee Philosophy */}
      <section className="section coffee-philosophy">
        <div className="container coffee-philosophy-grid">
          <motion.div
            className="coffee-philosophy-content"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="section-eyebrow">Our Coffee</span>

            <h2 className="section-title">
              Great coffee doesn't need to be complicated.
            </h2>

            <p>
              From carefully prepared espresso to comforting favourites, our
              drinks are made to be enjoyed rather than rushed.
            </p>

            <p>
              Whether you're starting your morning, taking a study break, or
              meeting a friend, there's always a cup waiting for you.
            </p>

            <Link to="/menu" className="btn btn-primary">
              Explore Our Menu
              <FiArrowUpRight />
            </Link>
          </motion.div>

          <motion.div
            className="coffee-philosophy-image"
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src="/images/about/coffee-philosophy.png"
              alt="Fresh coffee prepared at MrBean"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Community */}
      <section className="section about-community">
        <div className="container about-community-grid">
          <motion.div
            className="about-community-image"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src="/images/about/community.png"
              alt="People enjoying the MrBean café"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="about-community-content"
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="section-eyebrow">The MrBean Experience</span>

            <h2 className="section-title">
              Your table. Your time. Your space.
            </h2>

            <p>
              Need somewhere quiet to finish an assignment? We've got you.
            </p>

            <p>
              Meeting a friend for coffee? Stay awhile.
            </p>

            <p>
              Looking for a comfortable workspace with fast Wi-Fi? Pull up a
              chair.
            </p>

            <p>
              MrBean is designed to fit into your day, whatever that day looks
              like.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container">
          <motion.div
            className="about-cta-card"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <span className="section-eyebrow">Come Visit</span>

            <h2>
              Your next favourite coffee spot might be closer than you think.
            </h2>

            <p>
              Come for the coffee. Stay for the atmosphere.
            </p>

            <div className="about-cta-actions">
              <Link to="/reservation" className="btn btn-light">
                Reserve a Table
                <FiArrowUpRight />
              </Link>

              <Link to="/contact" className="btn btn-secondary">
                Find Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
