import { useEffect, useMemo, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import InnerHero from "../../components/Shared/InnerHero/InnerHero";
import CategoryNav from "../../components/Shared/CategoryNav/CategoryNav";
import GalleryGrid from "../../components/Gallery/GalleryGrid/GalleryGrid";
import GalleryLightbox from "../../components/Gallery/GalleryLightbox/GalleryLightbox";
import { galleryCategories, galleryItems} from "../../data/galleryData";
import "./Gallery.css";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const selectedIndex = selectedItem
    ? filteredItems.findIndex(
        (item) => item.id === selectedItem.id
      )
    : -1;

  const handlePrevious = () => {
    if (selectedIndex === -1) return;

    const previousIndex =
      selectedIndex === 0
        ? filteredItems.length - 1
        : selectedIndex - 1;

    setSelectedItem(filteredItems[previousIndex]);
  };

  const handleNext = () => {
    if (selectedIndex === -1) return;

    const nextIndex =
      selectedIndex === filteredItems.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedItem(filteredItems[nextIndex]);
  };

  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedItem) return;

      if (event.key === "Escape") {
        setSelectedItem(null);
      }

      if (event.key === "ArrowLeft") {
        handlePrevious();
      }

      if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem, filteredItems, selectedIndex]);

  return (
    <div className="gallery-page">
      <InnerHero
        eyebrow="Our Space"
        title="A Little Look Around."
        description="Coffee, conversations, quiet corners and everything that makes MrBean feel like your kind of place."
        image="/images/gallery/gallery-hero.png"
      />

      <section className="section gallery-section">
        <div className="container">
          <div className="section-header gallery-header">
            <span className="section-eyebrow">
              The MrBean Experience
            </span>

            <h2 className="section-title">
              See where your next coffee break could take you.
            </h2>

            <p className="section-description">
              Take a look around our coffee, desserts, workspace and
              comfortable corners.
            </p>
          </div>

          <CategoryNav
            categories={galleryCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <GalleryGrid
            items={filteredItems}
            onImageClick={setSelectedItem}
          />
        </div>
      </section>

      <section className="section gallery-cta">
        <div className="container">
          <div className="gallery-cta-card">
            <div>
              <span className="section-eyebrow">
                Seen Enough?
              </span>

              <h2>Come experience it for yourself.</h2>

              <p>
                Your favourite corner is waiting.
              </p>
            </div>

            <Link to="/reservation" className="btn btn-light">
              Reserve a Table
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <GalleryLightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default Gallery;