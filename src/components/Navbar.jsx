import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({ whatsappLink }) {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img
            src="/images/icon.webp"
            alt="Life Fitness Gym"
            className={styles.icon}
            width="200"
            height="200" // ✅ also corrected typo (heigh → height)
          />
          <span className={styles.name}>
            Life Fitness <span id="name">Gym</span>
          </span>
        </div>

        <nav className={styles.nav}>
          {location.pathname === "/" ? (
            <>
              <Link
                to="hero"
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass={styles.active}
                className={styles.link}
              >
                Home
              </Link>

              <Link
                to="about"
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass={styles.active}
                className={styles.link}
              >
                About
              </Link>

              <Link
                to="services"
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass={styles.active}
                className={styles.link}
              >
                Services
              </Link>

              <RouterLink
                to="/blogs"
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass={styles.active}
                className={styles.link}
              >
                Blogs
              </RouterLink>

              <RouterLink
                to="/calculator"
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass={styles.active}
                className={styles.link}
              >
                BmiCalculator
              </RouterLink>

              <Link
                to="contact"
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass={styles.active}
                className={styles.link}
              >
                Contact
              </Link>
            </>
          ) : (
            <>
              <RouterLink
                to="/"
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
                activeClass={styles.active}
                className={styles.link}
              >
                Home
              </RouterLink>
            </>
          )}
        </nav>

        <a
          className={styles.cta}
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Contact on WhatsApp
        </a>

        <a
          className={styles.wbutton}
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/wicon.webp" alt="WhatsApp Logo" width="40" />
        </a>
      </div>
    </header>
  );
}
