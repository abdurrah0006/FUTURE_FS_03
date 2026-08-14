import { motion } from "framer-motion";
import { FiArrowRight, FiBookOpen, FiBatteryCharging, FiCoffee, FiWifi } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../Shared/Container/Container";
import Section from "../Shared/Section/Section";
import { workspaceFeatures } from "../../data/workspaceData";
import "./Workspace.css";

const iconMap = {
  wifi: <FiWifi />,
  charging: <FiBatteryCharging />,
  seat: <FiCoffee />,
  quiet: <FiBookOpen />
};

const Workspace = () => {
  return (
    <Section className="workspace-section">
      <Container>
        <div className="workspace-grid">
          <motion.div
            className="workspace-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Your Space</span>

            <h2>
              Work. Study.
              <span> Unwind.</span>
            </h2>

            <p className="workspace-intro">
              Sometimes you need more than a desk. MrBean gives you a
              comfortable place to focus, meet, create or simply take a
              break from the usual routine.
            </p>

            <div className="workspace-features">
              {workspaceFeatures.map((feature) => (
                <div className="workspace-feature" key={feature.id}>
                  <span className="workspace-feature-icon">
                    {iconMap[feature.icon]}
                  </span>

                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="workspace-link">
              Explore The Space
              <FiArrowRight />
            </Link>
          </motion.div>

          <motion.div
            className="workspace-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="workspace-image-main">
              <img
                src="/images/home/workspace.png"
                alt="Comfortable workspace inside MrBean café"
                loading="lazy"
              />
            </div>

            <div className="workspace-mini-card">
              <span className="workspace-mini-icon">
                <FiCoffee />
              </span>

              <div>
                <strong>Your new favourite workspace.</strong>
                <span>Stay for a while.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Workspace;