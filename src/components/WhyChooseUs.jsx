import React from "react";
import { FaDumbbell, FaAppleAlt, FaHeartbeat, FaRunning } from "react-icons/fa";
import styles from "./WhyChooseUs.module.css"; // 👈 import CSS module

const features = [
  {
    icon: <FaRunning size={40} />,
    title: "Modern Equipment",
    desc: "Train with the latest gym equipment designed to maximize strength, endurance, and overall performance.",
  },
  {
    icon: <FaAppleAlt size={40} />,
    title: "Healthy Nutrition Plan",
    desc: "Get customized diet plans to fuel your body, boost energy levels, and support faster recovery.",
  },
  {
    icon: <FaDumbbell size={40} />,
    title: "Professional Training Plan",
    desc: "Follow structured workout routines created by certified trainers to achieve your fitness goals efficiently.",
  },
  {
    icon: <FaHeartbeat size={40} />,
    title: "Personalized Fitness Approach",
    desc: "Enjoy workouts and coaching tailored to your unique body type, lifestyle, and health requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whySection} id="why-us">
      <div className={styles.whyContainer}>
        <h4 className={styles.subtitle}>WHY CHOOSE US?</h4>
        <h2 className={styles.title}>PUSH YOUR LIMITS FORWARD</h2>
        <div className={styles.whyGrid}>
          {features.map((f, i) => (
            <div className={styles.whyCard} key={i}>
              <div className={styles.icon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
