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
          <img src="/images/hero1.jpg" alt="Gym interior - Fitness Life Gym" />
        </div>
        <div>
          <img src="/images/hero2.jpg" alt="Workout area - Fitness Life Gym" />
        </div>
        <div>
          <img
            src="/images/hero3.jpg"
            alt="Strength training - Fitness Life Gym"
          />
        </div>
      </Carousel>

      <div className={styles.content}>
        <h1>Fitness Life Gym</h1>
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
