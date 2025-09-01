import React, { useState } from "react";
import styles from "./Gallery.module.css"; // CSS module import

const images = [
  "/images/hero3.webp",
  "/images/hero1.webp",
  "/images/hero2.webp",
  "/images/hero3.webp",
  "/images/hero1.webp",
  "/images/hero2.webp",
];

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Grid Images */}
      <div className={styles.wrapper}>
        <h2> Train With Us – Gallery</h2>
        <div className={styles.galleryGrid}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gym"
              className={styles.galleryThumb}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <span className={styles.closeBtn} onClick={closeModal}>
            ✖
          </span>
          <span
            className={styles.prevBtn}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ❮
          </span>
          <img
            src={images[currentIndex]}
            alt="zoom"
            className={styles.modalImg}
            onClick={(e) => e.stopPropagation()}
          />
          <span
            className={styles.nextBtn}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ❯
          </span>
        </div>
      )}
    </div>
  );
}

export default Gallery;
