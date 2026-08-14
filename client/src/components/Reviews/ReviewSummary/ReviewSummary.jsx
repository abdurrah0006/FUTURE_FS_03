import { FiStar } from "react-icons/fi";
import "./ReviewSummary.css";

const ReviewSummary = ({ summary }) => {
  return (
    <div className="review-summary">
      <div className="review-score">
        <strong>{summary.rating}</strong>

        <div className="review-score-stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <FiStar
              key={index}
              className="star-filled"
            />
          ))}
        </div>

        <span>
          Based on {summary.totalReviews} reviews
        </span>
      </div>

      <div className="review-breakdown">
        {summary.breakdown.map((item) => (
          <div
            className="review-breakdown-row"
            key={item.stars}
          >
            <span>{item.stars}</span>

            <FiStar className="star-filled" />

            <div className="review-progress">
              <div
                style={{
                  width: `${item.percentage}%`
                }}
              />
            </div>

            <span>{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSummary;