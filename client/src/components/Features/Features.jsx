import { FiArrowUpRight } from "react-icons/fi";
import { featuredHighlights } from "../../data/homeData";
import Container from "../Shared/Container/Container";
import Section from "../Shared/Section/Section";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";
import "./Features.css";

const Features = () => {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="The MrBean Experience"
          title="A little more than your usual coffee shop."
          description="Whether you're grabbing a quick coffee, studying for an exam or spending the afternoon with friends, MrBean is designed around you."
        />

        <div className="features-grid">
          {featuredHighlights.map((feature) => (
            <article className="feature-card" key={feature.id}>
              <div className="feature-icon">{feature.icon}</div>

              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <FiArrowUpRight className="feature-arrow" />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Features;