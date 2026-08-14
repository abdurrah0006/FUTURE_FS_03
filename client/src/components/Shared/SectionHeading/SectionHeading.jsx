import "./SectionHeading.css";

const SectionHeading = ({ eyebrow, title, description, centered = false }) => {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeading;