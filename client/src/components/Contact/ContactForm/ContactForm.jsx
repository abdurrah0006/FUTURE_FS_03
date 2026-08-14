import { useState } from "react";
import { FiSend } from "react-icons/fi";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    setSubmitted(true);
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-heading">
        <span className="section-eyebrow">
          Get In Touch
        </span>

        <h2>Have a question?</h2>

        <p>
          Send us a message and we'll get back to you as soon
          as possible.
        </p>
      </div>

      {submitted ? (
        <div className="contact-form-success">
          <h3>Message received!</h3>

          <p>
            Thanks for reaching out to MrBean. We'll get back
            to you shortly.
          </p>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
              });
            }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="contact-form-row">
            <div className="form-field">
              <label htmlFor="contact-name">
                Name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">
                Email
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact-form-row">
            <div className="form-field">
              <label htmlFor="contact-phone">
                Phone
              </label>

              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject">
                Subject
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Send Message
            <FiSend />
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;