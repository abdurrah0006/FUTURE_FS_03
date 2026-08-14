import { useMemo, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import InnerHero from "../../components/Shared/InnerHero/InnerHero";
import CategoryNav from "../../components/Shared/CategoryNav/CategoryNav";
import MenuGrid from "../../components/Menu/MenuGrid/MenuGrid";
import { menuCategories, menuItems } from "../../data/menuData";
import "./Menu.css";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return menuItems;
    }

    return menuItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <div className="menu-page">
      <InnerHero
        eyebrow="Our Menu"
        title="Good Coffee. Good Food. Good Mood."
        description="Explore our selection of specialty coffee, refreshing drinks, desserts and café favourites."
        image="/images/menu/menu-hero.png"
      />

      <section className="section menu-section">
        <div className="container">
          <div className="section-header menu-header">
            <span className="section-eyebrow">
              Explore The Menu
            </span>

            <h2 className="section-title">
              Something for every kind of day.
            </h2>

            <p className="section-description">
              Whether you're here for your morning coffee, a study break,
              dessert with friends, or a productive afternoon, find something
              you'll enjoy.
            </p>
          </div>

          <CategoryNav
            categories={menuCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <MenuGrid items={filteredItems} />
        </div>
      </section>

      <section className="section menu-cta">
        <div className="container">
          <div className="menu-cta-card">
            <div>
              <span className="section-eyebrow">
                Find Your Spot
              </span>

              <h2>Found your favourite?</h2>

              <p>
                Reserve a table and enjoy it at MrBean.
              </p>
            </div>

            <Link to="/reservation" className="btn btn-light">
              Reserve a Table
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
