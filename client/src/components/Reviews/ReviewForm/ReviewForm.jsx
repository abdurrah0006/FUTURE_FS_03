import { useState } from "react";
import { FiSend, FiStar } from "react-icons/fi";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      ...formData,
      rating
    });
  };

  return (
    <form
      className="review-form"
      onSubmit={handleSubmit}
    >
      <div className="review-form-heading">
        <span className="section-eyebrow">
          Share Your Experience
        </span>

        <h3>How was your visit?</h3>

        <p>
          We'd love to hear what you think about MrBean.
        </p>
      </div>

      <div className="review-form-rating">
        <span>Your rating</span>

        <div className="review-form-stars">
          {Array.from({ length: 5 }).map((_, index) => {
            const star = index + 1;
            const active = star <= (hoverRating || rating);

            return (
              <button
                key={star}
                type="button"
                aria-label={`${star} star`}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
              >
                <FiStar
                  className={active ? "star-filled" : ""}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="review-form-row">
        <div className="form-field">
          <label htmlFor="review-name">
            Name
          </label>

          <input
            id="review-name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="review-email">
            Email
          </label>

          <input
            id="review-email"
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="review-message">
          Your review
        </label>

        <textarea
          id="review-message"
          name="review"
          rows="5"
          placeholder="Tell us about your experience..."
          value={formData.review}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={!rating}
      >
        Submit Review
        <FiSend />
      </button>
    </form>
  );
};

export default ReviewForm;