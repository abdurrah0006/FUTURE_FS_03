import { motion } from "framer-motion";
import { FiCheckCircle, FiStar } from "react-icons/fi";
import "./ReviewCard.css";

const ReviewCard = ({ review, index }) => {
  return (
    <motion.article
      className="review-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.3),
        ease: "easeOut"
      }}
      whileHover={{ y: -5 }}
    >
      <div className="review-card-header">
        <div className="review-user">
          <div className="review-avatar">
            <img
              src={review.avatar}
              alt={review.name}
              loading="lazy"
            />
          </div>

          <div>
            <div className="review-name-row">
              <h3>{review.name}</h3>

              {review.verified && (
                <FiCheckCircle
                  className="review-verified"
                  aria-label="Verified visit"
                />
              )}
            </div>

            <span>{review.date}</span>
          </div>
        </div>

        <div className="review-rating">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <FiStar
              key={starIndex}
              className={
                starIndex < review.rating
                  ? "star-filled"
                  : "star-empty"
              }
            />
          ))}
        </div>
      </div>

      <p className="review-text">
        “{review.reviewtext}”
      </p>
    </motion.article>
  );
};

export default ReviewCard;