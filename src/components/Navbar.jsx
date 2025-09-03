import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

export default function Navbar({ whatsappLink }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img
            src="/images/icon.webp"
            alt="Life Fitness Gym"
            fetchpriority="high"
            className={styles.icon}
            width="200"
            heigh="200"
          />
          <span className={styles.name}>
            Life Fitness <span id="name">Gym</span>
          </span>
        </div>
        <nav className={styles.nav}>
          <Link
            to="hero"
            smooth={true}
            offset={-80}
            duration={500}
            href=""
            spy={true}
            activeClass={styles.active}
            className={styles.link}
          >
            <a href="#home">Home</a>
          </Link>
          <Link
            to="about"
            smooth={true}
            offset={-80}
            duration={500}
            spy={true}
            href=""
            activeClass={styles.active}
            className={styles.link}
          >
            <a href="#about">About</a>
          </Link>
          <Link
            to="services"
            smooth={true}
            offset={-80}
            duration={500}
            href=""
            spy={true}
            activeClass={styles.active}
            className={styles.link}
          >
            <a href="#services">services</a>
          </Link>
          {/* <Link
            to="Blogs"
            smooth={true}
            offset={-80}
            duration={500}
            href=""
            spy={true}
            activeClass={styles.active}
            className={styles.link}
          >
            Blogs
          </Link> */}
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            href=""
            spy={true}
            activeClass={styles.active}
            className={styles.link}
          >
            <a href="#contact">Contact</a>
          </Link>
        </nav>
        <a
          className={styles.cta}
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Contact on WhatsApp
        </a>
        <a
          className={styles.wbutton}
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/wicon.webp"
            fetchpriority="high"
            alt="Google Logo"
            width="40"
          />
        </a>
      </div>
    </header>
  );
}
