import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          © {new Date().getFullYear()} Life Fitness Gym, Samana · All rights
          reserved.
        </p>
        <p>Trainer: Sahil Sharma · Phone: +91 9056138008</p>

        <div className={styles.socialLinks}>
          <a
            href="https://www.facebook.com/profile.php?id=61580296325466"
            target="_blank"
            aria-label="Facebook"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/lifefitnessgymsamana/"
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/lifefitnessgym7"
            target="_blank"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com/@lifefitnessgymsamana"
            target="_blank"
            aria-label="Youtube"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
