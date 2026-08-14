import { useState } from "react";
import { FiArrowRight, FiX, FiMaximize2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../Shared/Container/Container";
import Section from "../Shared/Section/Section";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";
import { galleryItems } from "../../data/galleryData";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  const galleryPreview = [
    galleryItems.find((item) => item.category === "coffee"),
    galleryItems.find((item) => item.category === "interior"),
    galleryItems.find((item) => item.category === "workspace"),
    galleryItems.find((item) => item.category === "desserts")
  ].filter(Boolean);

  return (
    <>
      <Section className="gallery-section">
        <Container>
          <SectionHeading
            eyebrow="Inside MrBean"
            title="A Space Worth Staying For."
            description="Take a look around our coffee, desserts, workspace and the little details that make MrBean feel like home."
          />

          <div className="gallery-grid">
            {galleryPreview.map((item) => (
              <button
                type="button"
                className={`gallery-item gallery-item-${item.size}`}
                key={item.id}
                onClick={() => openLightbox(item)}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>

                  <span className="gallery-expand">
                    <FiMaximize2 />
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="gallery-footer">
            <Link to="/gallery" className="gallery-link">
              View Full Gallery
              <FiArrowRight />
            </Link>
          </div>
        </Container>
      </Section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            <FiX />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
