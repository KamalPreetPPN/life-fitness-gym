import React, { useState } from "react";
import styles from "./Gallery.module.css"; // CSS module import

const images = [
  {
    src: "/images/equipment1.webp",
    alt: "Sahil Sharma doing dumbbell training at Best Gym in Samana - Life Fitness Gym",
  },
  {
    src: "/images/equipment2.webp",
    alt: "Personal treadmill training by Sahil Sharma at Life Fitness Gym, the Best Gym in Samana",
  },
  {
    src: "/images/equipment3.webp",
    alt: "Modern strength training machines available at Life Fitness Gym - Best Gym in Samana",
  },
  {
    src: "/images/equipment4.webp",
    alt: "Sahil Sharma demonstrating barbell workout at Life Fitness Gym Samana, Best Gym for strength training",
  },
  {
    src: "/images/equipment5.webp",
    alt: "Cardio and fitness equipment at Life Fitness Gym Samana - Best Gym for fitness in Samana",
  },
  {
    src: "/images/equipment6.webp",
    alt: "Sahil Sharma guiding functional training session at Life Fitness Gym, the Best Gym in Samana",
  },
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
        <h2>Best Gym in Samana - Life Fitness Gym</h2>
        <div className={styles.galleryGrid}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
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
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
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
