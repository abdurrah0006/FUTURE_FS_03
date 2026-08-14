import { AnimatePresence, motion } from "framer-motion";
import MenuCard from "../MenuCard/MenuCard";
import "./MenuGrid.css";

const MenuGrid = ({ items }) => {
  return (
    <motion.div className="menu-grid" layout>
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            <MenuCard item={item} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default MenuGrid;