import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import styles from "./App.module.css";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Gallery from "./components/Gallery.jsx";

export default function App() {
  const whatsapp = "https://wa.me/919056138008";
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>Fitness Life Gym | Best Gym in Samana</title>
        <meta
          name="description"
          content="Fitness Life Gym in Samana. Trainer Sahil Sharma. Cardio, Weight Gain, Weight Loss & Weight Training. Near Fireman Office, Tehsil Road, Samana, Patiala."
        />
        <meta
          name="keywords"
          content="Gym in Samana, Life Fitness Gym, Best gym near me, Sahil Sharma fitness"
        />
      </Helmet>

      <Navbar whatsappLink={whatsapp} />
      <main>
        <section id="hero">
          <Hero whatsappLink={whatsapp} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section>
          <WhyChooseUs />
        </section>
        <section id="contact">
          <Contact whatsappLink={whatsapp} />
        </section>
        <section>
          <Gallery></Gallery>
        </section>
      </main>
      <Footer />
      <a
        className={styles.whatsappFloat}
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}
