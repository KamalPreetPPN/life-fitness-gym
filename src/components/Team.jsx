import React from "react";
import styles from "./Team.module.css";

const teamMembers = [
  {
    name: "Sahil Sharma",
    role: "Strength & Conditioning Coach",
    img: "/images/sahil.webp",
  },
  {
    name: "Mohit Bhatia",
    role: "Functional & Cardio Trainer",
    img: "/images/mohit.webp",
  },
  {
    name: "Rocky Verma",
    role: "Mobility, Flexibility & Recovery",
    img: "/images/rocky.webp",
  },
];

const Team = () => {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.heading}>Meet Our Coaches</h2>
      <div className={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.member}>
            <img
              src={member.img}
              alt={member.name}
              className={styles.memberImage}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
