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
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/sahil_fitness8186/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
