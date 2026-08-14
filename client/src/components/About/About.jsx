import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../Shared/Container/Container";
import Section from "../Shared/Section/Section";
import { aboutHighlights } from "../../data/aboutData";
import "./About.css";

const About = () => {
  return (
    <Section className="about-section">
      <Container>
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img
                src="/images/home/mrbean-about.png"
                alt="Cozy interior of MrBean café"
                className="about-image"
              />
            </div>

            <div className="about-badge">
              <span className="about-badge-number">01</span>
              <div>
                <strong>Made with care</strong>
                <span>Served with warmth</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-eyebrow">About MrBean</span>

            <h2>
              More Than Just
              <span> Your Daily Coffee.</span>
            </h2>

            <p className="about-intro">
              MrBean was created to be more than a place to grab your morning
              coffee. It's a space where great coffee, good food and a
              comfortable atmosphere come together.
            </p>

            <p>
              Whether you're meeting a friend, preparing for an exam, working
              remotely or simply looking for a quiet corner to relax, there's
              always a place for you at MrBean.
            </p>

            <div className="about-highlights">
              {aboutHighlights.map((item) => (
                <div className="about-highlight" key={item.id}>
                  <span className="about-check">
                    <FiCheck />
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="about-link">
              Discover Our Story
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;