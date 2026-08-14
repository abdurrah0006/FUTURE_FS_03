import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import InnerHero from "../../components/Shared/InnerHero/InnerHero";
import ReviewSummary from "../../components/Reviews/ReviewSummary/ReviewSummary";
import ReviewGrid from "../../components/Reviews/ReviewGrid/ReviewGrid";
import ReviewForm from "../../components/Reviews/ReviewForm/ReviewForm";
import { reviewSummary, reviews} from "../../data/reviewsData";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews-page">
      <InnerHero
        eyebrow="Guest Reviews"
        title="Loved by Coffee People."
        description="See what our guests have to say about their coffee, food and time at MrBean."
        image="/images/reviews/reviews-hero.png"
      />

      <section className="section reviews-section">
        <div className="container">
          <div className="section-header reviews-header">
            <span className="section-eyebrow">
              What Our Guests Say
            </span>

            <h2 className="section-title">
              Good coffee is better when it's shared.
            </h2>

            <p className="section-description">
              From quick coffee breaks to long study sessions,
              here's what our guests have experienced.
            </p>
          </div>

          <ReviewSummary summary={reviewSummary} />

          <ReviewGrid reviews={reviews} />
        </div>
      </section>

      <section className="section review-form-section">
        <div className="container">
          <ReviewForm />
        </div>
      </section>

      <section className="section reviews-cta">
        <div className="container">
          <div className="reviews-cta-card">
            <div>
              <span className="section-eyebrow">
                Your Turn
              </span>

              <h2>Come make your own coffee story.</h2>

              <p>
                Find a seat, order your favourite and stay awhile.
              </p>
            </div>

            <Link
              to="/reservation"
              className="btn btn-light"
            >
              Reserve a Table
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;