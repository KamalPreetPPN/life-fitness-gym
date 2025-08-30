// import React from "react";
// import styles from "./Services.module.css";

// const list = [
//   {
//     title: "Cardio Training",
//     desc: "Build stamina and improve heart health with guided cardio sessions.",
//   },
//   {
//     title: "Weight Gain Training",
//     desc: "Structured hypertrophy plans to help you gain lean muscle.",
//   },
//   {
//     title: "Weight Loss Training",
//     desc: "Calorie-burning workouts tailored to your body and goals.",
//   },
//   {
//     title: "Weight Training",
//     desc: "Strength routines with proper form and progressive overload.",
//   },
// ];

// export default function Services() {
//   return (
//     <section className={styles.wrap}>
//       <div className={styles.container}>
//         <h2>Our Services</h2>
//         <div className={styles.grid}>
//           {list.map((s, i) => (
//             <div className={styles.card} key={i}>
//               <h3>{s.title}</h3>
//               <p>{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import styles from "./Services.module.css";

const list = [
  {
    title: "ABS",
    desc: "Core strengthening and abs-focused workouts.",
    img: "/images/abs.webp",
  },
  {
    title: "Cardio",
    desc: "Aerobics and cardio workouts for stamina.",
    img: "/images/cardio.png",
  },
  {
    title: "Weight Gain",
    desc: "Hypertrophy and strength training to gain muscle.",
    img: "/images/weight-gain.png",
  },
  {
    title: "Weight Loss",
    desc: "Fat-burning sessions and conditioning workouts.",
    img: "/images/weight-loss.png",
  },
];

export default function Services() {
  return (
    <section className={styles.wrap} id="services">
      <div className={styles.container}>
        <h2>Our Services</h2>
        <div className={styles.row}>
          {list.map((s, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.inner}>
                {/* Front Side */}
                <div className={styles.front}>
                  <img src={s.img} alt={s.title} className={styles.image} />
                  <h3>{s.title}</h3>
                </div>
                {/* Back Side */}
                <div className={styles.back}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
