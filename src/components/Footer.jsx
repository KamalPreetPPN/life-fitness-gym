import React from "react";
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
      </div>
    </footer>
  );
}
