import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import styles from "../App.module.css";
import WhyChooseUs from "./WhyChooseUs.jsx";
import Gallery from "./Gallery.jsx";
import Team from "./Team.jsx";
import { FaWhatsapp, FaCalculator, FaTimes } from "react-icons/fa";
import Navbar from "./Navbar.jsx";
import BmiCalculator from "./BmiCalculator.jsx";

function HomePage() {
  const whatsapp = "https://wa.me/919056138008";
  const [showBmi, setShowBmi] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // check mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>Life Fitness Gym | Best Gym in Samana</title>
        <meta
          name="description"
          content="Life Fitness Gym in Samana. Trainer Sahil Sharma. Cardio, Weight Gain, Weight Loss & Weight Training. Near Fireman Office, Tehsil Road, Samana, Patiala."
        />
        <meta
          name="keywords"
          content="Gym in Samana, Life Fitness Gym, Best gym near me, Sahil Sharma fitness"
        />
      </Helmet>

      {/* <Navbar whatsappLink={whatsapp} /> */}
      <main
        style={{
          filter: showBmi ? "blur(6px)" : "none",
          transition: "0.3s ease",
        }}
      >
        <section id="hero">
          <Hero whatsappLink={whatsapp} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="Team">
          <Team />
        </section>
        <section id="Why-Choose-Us">
          <WhyChooseUs />
        </section>
        <section id="contact">
          <Contact whatsappLink={whatsapp} />
        </section>
        <section>
          <Gallery />
        </section>
      </main>

      {/* ✅ WhatsApp Floating Button */}
      <a
        className={styles.whatsappFloat}
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp size={40} />
      </a>

      {/* ✅ BMI Floating Button (only mobile view) */}
      {isMobile && !showBmi && (
        <button
          onClick={() => setShowBmi(true)}
          className={styles.bmiFloat}
          title="Check Your BMI"
        >
          <FaCalculator size={100} />
        </button>
      )}

      {/* ✅ Popup Modal for BMI Calculator */}
      {showBmi && (
        <div className={styles.bmiModal}>
          <div className={styles.bmiModalContent}>
            <button
              className={styles.closeBtn}
              onClick={() => setShowBmi(false)}
            >
              <FaTimes />
            </button>
            <BmiCalculator />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
