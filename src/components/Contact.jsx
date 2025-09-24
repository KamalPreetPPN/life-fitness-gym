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
            title="Life Fitness Gym Location In Samana | Best Gym In Samana"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3144.6427413116053!2d76.19298500783472!3d30.15395297510782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911cdd9438a3817%3A0x6382b176ae1d3e2e!2sLife%20Fitness%20Gym!5e1!3m2!1sen!2sin!4v1756983084663!5m2!1sen!2sin"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
