import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import Container from "../Shared/Container/Container";
import Section from "../Shared/Section/Section";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";
import { reviews } from "../../data/reviewsData";
import "./Reviews.css";

const Reviews = () => {
  const featuredReviews = reviews.filter((review) => review.featured).slice(0, 3);
  const [activeReview, setActiveReview] = useState(0);

  const currentReview = featuredReviews[activeReview];

  const nextReview = () => {
    setActiveReview((current) => (current + 1) % featuredReviews.length);
  };

  const previousReview = () => {
    setActiveReview(
      (current) => (current - 1 + featuredReviews.length) % featuredReviews.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((current) => (current + 1) % featuredReviews.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [featuredReviews.length]);

  return (
    <Section className="reviews-section">
      <Container>
        <SectionHeading
          eyebrow="Customer Love"
          title="Loved by the People Who Visit."
          description="Great coffee is only part of the experience. Here's what our community has to say."
        />

        <div className="reviews-slider">
          <button
            type="button"
            className="reviews-arrow reviews-arrow-left"
            onClick={previousReview}
            aria-label="Previous review"
          >
            <FiArrowLeft />
          </button>

          <div className="review-card">
            <div className="review-stars">
              {Array.from({ length: currentReview.rating }).map((_, index) => (
                <FiStar key={index} />
              ))}
            </div>

            <blockquote>
              "{currentReview.reviewtext}"
            </blockquote>

            <div className="review-author">
              <div className="review-avatar">
                <img
                  src={currentReview.avatar}
                  alt={currentReview.name}
                  loading="lazy"
                />
              </div>

              <div className="review-author-info">
                <strong>{currentReview.name}</strong>
                <span>{currentReview.role}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="reviews-arrow reviews-arrow-right"
            onClick={nextReview}
            aria-label="Next review"
          >
            <FiArrowRight />
          </button>
        </div>

        <div className="reviews-controls">
          <span className="reviews-counter">
            {String(activeReview + 1).padStart(2, "0")} /{" "}
            {String(featuredReviews.length).padStart(2, "0")}
          </span>

          <div className="reviews-dots">
            {featuredReviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                className={`reviews-dot ${
                  index === activeReview ? "active" : ""
                }`}
                onClick={() => setActiveReview(index)}
                aria-label={`View review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Reviews;
