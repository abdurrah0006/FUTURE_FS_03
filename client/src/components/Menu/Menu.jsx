import { useMemo, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../Shared/Container/Container";
import Section from "../Shared/Section/Section";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";
import { menuCategories, menuItems } from "../../data/menuData";
import "./Menu.css";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    const items = activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory);
    return items.filter((item) => item.featured).slice(0, 6);
  }, [activeCategory]);

  return (
    <Section className="menu-preview">
      <Container>
        <SectionHeading
          eyebrow="From Our Menu"
          title="Favourites Worth Coming Back For."
          description="A selection of coffee, desserts and treats our customers keep coming back to."
        />

        <div className="menu-filters" role="tablist" aria-label="Menu categories">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`menu-filter ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
              role="tab"
              aria-selected={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <Link to={`/menu/${item.id}`} className="menu-card" key={item.id}>
              <div className="menu-card-image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-card-image"
                  loading="lazy"
                />

                <span className="menu-card-category">
                  {item.category}
                </span>
              </div>

              <div className="menu-card-content">
                <div className="menu-card-header">
                  <h3>{item.name}</h3>
                  <span className="menu-card-price">₹ {item.price}</span>
                </div>

                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="menu-preview-footer">
          <Link to="/menu" className="menu-view-all">
            Explore Full Menu
            <FiArrowRight />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Menu;
