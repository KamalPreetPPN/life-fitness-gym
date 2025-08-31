import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <h2>About Us</h2>
        <p>
          Welcome to <strong>Fitness Life Gym</strong>, your neighborhood
          fitness center in <strong>Samana</strong>, District{" "}
          <strong>Patiala</strong>. Led by trainer <strong>Sahil Sharma</strong>
          , we offer personalized guidance for beginners and athletes alike.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Trainer</h3>
            <p>Sahil Sharma</p>
          </div>
          <div className={styles.card}>
            <h3>Address</h3>
            <p>Near Fireman Office, Tehsil Road, Samana</p>
          </div>
          <div className={styles.card}>
            <h3>Timings</h3>
            <p>
              Mon–Sat: 5:00 AM – 10:00 PM
              <br />
              Sun: 7:00 AM – 1:00 PM
            </p>
          </div>
          <div className={styles.card}>
            <h3>Contact</h3>
            <p>+91 9056138008</p>
          </div>
        </div>
      </div>
    </section>
  );
}
