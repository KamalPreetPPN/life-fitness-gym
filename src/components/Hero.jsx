import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Hero.module.css";

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
        <div>
          <img src="/images/hero1.jpg" alt="Gym interior - Life Fitness Gym" />
        </div>
        <div>
          <img src="/images/hero2.jpg" alt="Workout area - Life Fitness Gym" />
        </div>
        <div>
          <img
            src="/images/hero3.jpg"
            alt="Strength training - Life Fitness Gym"
          />
        </div>
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
