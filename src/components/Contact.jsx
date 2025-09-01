import React from "react";
import styles from "./Contact.module.css";
import Gallery from "./Gallery";
export default function Contact({ whatsappLink }) {
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <h2 id="kph2">Contact Us</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Address</h3>
            <p>Near Fireman Office, Tehsil Road, Samana, District Patiala</p>
          </div>
          <div className={styles.card}>
            <h3>Phone</h3>
            <p>
              <a href="tel:+919056138008">+91 9056138008</a>
            </p>
          </div>
          <div className={styles.card}>
            <h3>WhatsApp</h3>
            <p>
              <a
                className={styles.wa}
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
          <div className={styles.card}>
            <h3>City</h3>
            <p>Samana, Patiala (Punjab)</p>
          </div>
        </div>

        <div className={styles.map}>
          <iframe
            title="Gym Location"
            src="https://www.google.com/maps?q=Samana+Punjab&output=embed"
            fetchpriority="high"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
