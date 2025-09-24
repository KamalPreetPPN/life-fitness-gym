import React from "react";
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
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./Navbar.jsx";
function HomePage() {
  const whatsapp = "https://wa.me/919056138008";
  return (
    <div>
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
          <section id="Team">
            <Team></Team>
          </section>
          <section id="Why-Choose-Us">
            <WhyChooseUs />
          </section>
          <section id="contact">
            <Contact whatsappLink={whatsapp} />
          </section>
          <section>
            <Gallery></Gallery>
          </section>
        </main>
        {/* <Footer /> */}
        <a
          className={styles.whatsappFloat}
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp size={40} />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
