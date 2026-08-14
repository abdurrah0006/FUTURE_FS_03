import { motion } from "framer-motion";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./ReviewGrid.css";

const ReviewGrid = ({ reviews }) => {
  return (
    <motion.div
      className="review-grid"
      layout
    >
      {reviews.map((review, index) => (
        <ReviewCard
          key={review.id}
          review={review}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default ReviewGrid;