import React from "react";
import styles from "./Team.module.css";

const teamMembers = [
  {
    name: "Sahil Sharma",
    role: "Strength & Conditioning Coach",
    img: "/images/sahil.webp",
    alt: "Sahil Sharma - Strength & Conditioning Coach at Life Fitness Gym Samana",
  },
  // {
  //   name: "Mohit Bhatia",
  //   role: "Functional & Cardio Trainer",
  //   img: "/images/mohit.webp",
  //   alt: "Mohit Bhatia - Functional & Cardio Trainer at Life Fitness Gym Samana",
  // },
  {
    name: "Rocky Verma",
    role: "Mobility, Flexibility & Recovery Specialist",
    img: "/images/rocky.webp",
    alt: "Rocky Verma - Mobility, Flexibility & Recovery Trainer at Life Fitness Gym Samana",
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
              alt={member.alt}
              className={styles.memberImage}
              loading="lazy"
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
