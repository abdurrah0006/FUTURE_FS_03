import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { navigationData } from "../../data/navigationData";
import MobileMenu from "./MobileMenu";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            MrBean<span>.</span>
          </Link>

          <nav className="navbar-links" aria-label="Main navigation">
            {navigationData.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            <Link to="/reservation" className="navbar-reserve">
              Reserve a Table
              <FiArrowUpRight />
            </Link>

            <button
              type="button"
              className={`navbar-menu-button ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        navigation={navigationData}
        onClose={closeMenu}
      />
    </>
  );
};

export default Navbar;