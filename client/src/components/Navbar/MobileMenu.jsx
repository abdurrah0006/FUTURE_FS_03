import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = ({ open, navigation, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="mobile-menu-panel"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mobile-menu-header">
              <Link to="/" className="mobile-menu-logo" onClick={onClose}>
                MrBean<span>.</span>
              </Link>

              <button
                type="button"
                className="mobile-menu-close"
                onClick={onClose}
                aria-label="Close navigation"
              >
                <FiX />
              </button>
            </div>

            <nav className="mobile-menu-links">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.25
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <span>{item.label}</span>
                    <FiArrowUpRight />
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <Link
              to="/reservation"
              className="mobile-menu-reserve btn btn-primary"
              onClick={onClose}
            >
              Reserve a Table
              <FiArrowUpRight />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;