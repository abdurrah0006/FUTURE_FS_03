import { motion } from "framer-motion";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../Shared/Container/Container";
import Section from "../Shared/Section/Section";
import { studentOffer } from "../../data/offerData";
import "./StudentOffer.css";

const StudentOffer = () => {
  return (
    <Section className="student-offer-section">
      <Container>
        <div className="student-offer">
          <div className="student-offer-content">
            <span className="student-offer-eyebrow">
              <FiStar />
              {studentOffer.eyebrow}
            </span>

            <div className="student-offer-discount">
              {studentOffer.discount}
            </div>

            <h2>{studentOffer.title}</h2>

            <p>{studentOffer.description}</p>

            <Link to="/contact" className="student-offer-button">
              {studentOffer.cta}
              <FiArrowRight />
            </Link>

            <span className="student-offer-terms">
              {studentOffer.terms}
            </span>
          </div>

          <motion.div
            className="student-offer-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="student-offer-image">
              <img
                src={studentOffer.image}
                alt="Coffee and study setup at MrBean"
                loading="lazy"
              />
            </div>

            <div className="student-offer-sticker">
              <span>STUDY</span>
              <strong>&</strong>
              <span>SAVE</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default StudentOffer;