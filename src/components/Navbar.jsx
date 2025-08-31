// import React from 'react'
// import { Link } from 'react-scroll'
// import styles from './Navbar.module.css'

// export default function Navbar({ whatsappLink }){
//   return (
//     <header className={styles.header}>
//       <div className={styles.container}>
//         <div className={styles.brand}>
//           <img src="/images/icon.png" alt="Fitness Life Gym" className={styles.icon} />
//           <span className={styles.name}>Fitness Life Gym</span>
//         </div>
//         <nav className={styles.nav}>
//           <Link to="hero" smooth offset={-80} duration={500} className={styles.link}>Home</Link>
//           <Link to="about" smooth offset={-80} duration={500} className={styles.link}>About</Link>
//           <Link to="services" smooth offset={-80} duration={500} className={styles.link}>Services</Link>
//           <Link to="contact" smooth offset={-80} duration={500} className={styles.link}>Contact</Link>
//         </nav>
//         <a className={styles.cta} href={whatsappLink} target="_blank" rel="noreferrer">Contact on WhatsApp</a>
//       </div>
//     </header>
//   )
// }

import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

export default function Navbar({ whatsappLink }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img
            src="/images/icon.png"
            alt="Life Fitness Gym"
            className={styles.icon}
            width="200"
            heigh="200"
          />
          <span className={styles.name}>Life Fitness Gym</span>
        </div>
        <nav className={styles.nav}>
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
          <img src="/images/wicon.png" alt="Google Logo" width="40" />
        </a>
      </div>
    </header>
  );
}
