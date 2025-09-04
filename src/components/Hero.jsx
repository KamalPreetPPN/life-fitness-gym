import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Hero.module.css";

const heroSlides = [
  {
    img: "/images/hero1.webp",
    alt: "Life Fitness Gym Samana - India's Best Gym with Modern Equipment",
  },
  {
    img: "/images/hero2.webp",
    alt: "Certified Gym Trainer at Life Fitness Gym Samana - Personal Training & Cardio",
  },
  {
    img: "/images/hero3.webp",
    alt: "Strength Training and Weightlifting at Life Fitness Gym Samana Punjab",
  },
];

export default function Hero({ whatsappLink }) {
  return (
    <div className={styles.heroWrap}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3500}
        swipeable
      >
        {heroSlides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.img}
              alt={slide.alt}
              loading="eager" // first screen content, better for SEO & LCP
              fetchpriority="high"
            />
          </div>
        ))}
      </Carousel>

      <div className={styles.content}>
        <h1>
          Life Fitness <span>Gym</span>
        </h1>
        <p>Transform Your Body, Transform Your Life</p>
        <a
          className={styles.cta}
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Join on WhatsApp
        </a>
      </div>
    </div>
  );
}
