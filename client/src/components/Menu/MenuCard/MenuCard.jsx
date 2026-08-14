import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./MenuCard.css";

const MenuCard = ({ item, index }) => {
  return (
    <motion.article
      className="menu-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.3),
        ease: "easeOut"
      }}
      whileHover={{ y: -6 }}
    >
      <div className="menu-card-image">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
        />

        {item.featured && (
          <span className="menu-card-badge">
            Best Seller
          </span>
        )}
      </div>

      <div className="menu-card-content">
        <div className="menu-card-top">
          <h3>{item.name}</h3>
          <span className="menu-card-price">₹ {item.price}</span>
        </div>

        <p>{item.description}</p>

        <Link
         to={`/menu/${item.id}`}
          className="menu-card-link"
        >
          View Item
          <FiArrowUpRight />
        </Link>
      </div>
    </motion.article>
  );
};

export default MenuCard;