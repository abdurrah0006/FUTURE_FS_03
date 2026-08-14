import { motion } from "framer-motion";
import "./GalleryGrid.css";

const GalleryGrid = ({ items, onImageClick }) => {
  return (
    <motion.div className="gallery-grid" layout>
      {items.map((item, index) => (
        <motion.button
          key={item.id}
          type="button"
          className={`gallery-item gallery-item-${item.size}`}
          layout
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{
            duration: 0.45,
            delay: Math.min(index * 0.05, 0.3)
          }}
          whileHover={{ scale: 0.985 }}
          onClick={() => onImageClick(item)}
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
          />

          <span className="gallery-item-overlay">
            <span>{item.title}</span>
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default GalleryGrid;