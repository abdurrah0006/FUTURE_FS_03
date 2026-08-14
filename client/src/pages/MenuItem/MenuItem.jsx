import { motion } from "framer-motion";
import { FiArrowLeft, FiCalendar, FiCheck } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { menuItems } from "../../data/menuData";
import "./MenuItem.css";

const MenuItem = () => {
  const { id } = useParams();

  const item = menuItems.find(
    (menuItem) => menuItem.id === id
  );

  if (!item) {
    return (
      <section className="menu-item-not-found section">
        <div className="container">
          <h1>Item Not Found</h1>

          <p>
            Sorry, we couldn't find that menu item.
          </p>

          <Link
            to="/menu"
            className="btn btn-primary"
          >
            Back to Menu
          </Link>
        </div>
      </section>
    );
  }

  const recommendations = menuItems
    .filter(
      (menuItem) =>
        menuItem.category === item.category &&
        menuItem.id !== item.id
    )
    .slice(0, 3);

  return (
    <main className="menu-item-page">
      <section className="section menu-item-section">
        <div className="container">
          <Link
            to="/menu"
            className="menu-item-back"
          >
            <FiArrowLeft />
            Back to Menu
          </Link>

          <div className="menu-item-layout">
            <motion.div
              className="menu-item-image-wrapper"
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="menu-item-image"
              />
            </motion.div>

            <motion.div
              className="menu-item-content"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.08
              }}
            >
              <span className="section-eyebrow">
                {item.category}
              </span>

              <h1>{item.name}</h1>

              <p className="menu-item-description">
                {item.description}
              </p>

              <div className="menu-item-price">
                {item.price}
              </div>

              {item.details && (
                <div className="menu-item-details">
                  {item.details.map((detail) => (
                    <div
                      className="menu-item-detail"
                      key={detail}
                    >
                      <FiCheck />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="menu-item-actions">
                <Link
                  to="/reservation"
                  className="btn btn-primary"
                >
                  <FiCalendar />
                  Reserve a Table
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {recommendations.length > 0 && (
        <section className="section menu-item-recommendations">
          <div className="container">
            <div className="menu-item-recommendation-heading">
              <span className="section-eyebrow">
                You May Also Like
              </span>

              <h2>More from {item.category}</h2>
            </div>

            <div className="menu-item-recommendation-grid">
              {recommendations.map((recommendation) => (
                <Link
                  to={`/menu/${recommendation.id}`}
                  className="menu-recommendation-card"
                  key={recommendation.id}
                >
                  <div className="menu-recommendation-image">
                    <img
                      src={recommendation.image}
                      alt={recommendation.name}
                    />
                  </div>

                  <div className="menu-recommendation-content">
                    <span>
                      {recommendation.category}
                    </span>

                    <h3>{recommendation.name}</h3>

                    <p>
                      {recommendation.description}
                    </p>

                    <strong>
                      {recommendation.price}
                    </strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default MenuItem;