import { motion } from "framer-motion";
import "./CategoryNav.css";

const CategoryNav = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="menu-category-nav">
      {categories.map((category) => {
        const active = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            className={`menu-category-button ${active ? "active" : ""}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {active && (
              <motion.span
                className="menu-category-active"
                layoutId="menu-category-active"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}

            <span>{category.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryNav;