import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
import "./GalleryLightbox.css";

const GalleryLightbox = ({
  item,
  items,
  onClose,
  onPrevious,
  onNext
}) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="gallery-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="gallery-lightbox-content"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={onClose}
              aria-label="Close image"
            >
              <FiX />
            </button>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-lightbox-caption">
              <span>{item.title}</span>
            </div>

            <button
              type="button"
              className="gallery-lightbox-arrow gallery-lightbox-prev"
              onClick={onPrevious}
              aria-label="Previous image"
            >
              <FiArrowLeft />
            </button>

            <button
              type="button"
              className="gallery-lightbox-arrow gallery-lightbox-next"
              onClick={onNext}
              aria-label="Next image"
            >
              <FiArrowRight />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryLightbox;