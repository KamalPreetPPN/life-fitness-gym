import React from "react";
import { FaDumbbell, FaAppleAlt, FaHeartbeat, FaRunning } from "react-icons/fa";
import styles from "./WhyChooseUs.module.css"; // 👈 import CSS module

const features = [
  {
    icon: <FaRunning size={40} />,
    title: "Modern equipment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
  },
  {
    icon: <FaAppleAlt size={40} />,
    title: "Healthy nutrition plan",
    desc: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    icon: <FaDumbbell size={40} />,
    title: "Professional training plan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
  },
  {
    icon: <FaHeartbeat size={40} />,
    title: "Unique to your needs",
    desc: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
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
