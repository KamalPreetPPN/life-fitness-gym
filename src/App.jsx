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
import Team from "./components/Team.jsx";
import { FaWhatsapp } from "react-icons/fa";
import HomePage from "./components/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs.jsx";
export default function App() {
  const whatsapp = "https://wa.me/919056138008";
  return (
    <div>
      <Navbar whatsappLink={whatsapp} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
    // <div className={styles.wrapper}>
    //   <Helmet>
    //     <title>Life Fitness Gym | Best Gym in Samana</title>
    //     <meta
    //       name="description"
    //       content="Life Fitness Gym in Samana. Trainer Sahil Sharma. Cardio, Weight Gain, Weight Loss & Weight Training. Near Fireman Office, Tehsil Road, Samana, Patiala."
    //     />
    //     <meta
    //       name="keywords"
    //       content="Gym in Samana, Life Fitness Gym, Best gym near me, Sahil Sharma fitness"
    //     />
    //   </Helmet>

    //   <Navbar whatsappLink={whatsapp} />
    //   <main>
    //     <section id="hero">
    //       <Hero whatsappLink={whatsapp} />
    //     </section>
    //     <section id="about">
    //       <About />
    //     </section>
    //     <section id="services">
    //       <Services />
    //     </section>
    //     <section id="Team">
    //       <Team></Team>
    //     </section>
    //     <section id="Why-Choose-Us">
    //       <WhyChooseUs />
    //     </section>
    //     <section id="contact">
    //       <Contact whatsappLink={whatsapp} />
    //     </section>
    //     <section>
    //       <Gallery></Gallery>
    //     </section>
    //   </main>
    //   <Footer />
    //   <a
    //     className={styles.whatsappFloat}
    //     href={whatsapp}
    //     target="_blank"
    //     rel="noreferrer"
    //   >
    //     <FaWhatsapp size={40} />
    //   </a>
    // </div>
  );
}
