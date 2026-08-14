import { useState } from "react";
import "./Image.css";

const Image = ({ src, alt = "", className = "", ...props }) => {
  const [error, setError] = useState(false);

  return (
    <div className={`image-wrapper ${className}`}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          {...props}
        />
      ) : (
        <div className="image-fallback">
          Image unavailable
        </div>
      )}
    </div>
  );
};

export default Image;