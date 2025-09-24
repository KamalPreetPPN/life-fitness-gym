import React, { useState } from "react";
import styles from "./Blogs.module.css";

const blogPosts = [
  {
    id: 1,
    title: "Life Fitness Gym Samana – The Best Gym in Samana",
    image: "/images/lifefitnessgym.jpeg",
    seoAlt:
      "Life Fitness Gym Samana - Best Gym in Samana near me with personal training",
    short:
      "Discover why Life Fitness Gym Samana is the #1 choice for fitness lovers...",
    full: "Life Fitness Gym Samana, owned and trained by Sahil Sharma, offers world-class equipment, personal training sessions, and a motivating environment. Located in the heart of Samana, this is the ultimate destination for anyone serious about health and fitness.",
  },
  {
    id: 2,
    title: "Owner & Trainer Sahil Sharma – Your Personal Fitness Coach",
    image: "/images/sahil.webp",
    seoAlt: "Sahil Sharma personal fitness trainer at Life Fitness Gym Samana",
    short:
      "Meet Sahil Sharma, the passionate owner and head trainer of Life Fitness Gym Samana...",
    full: "Sahil Sharma brings years of professional training experience, helping hundreds achieve their dream physique. His custom workout and diet plans ensure safe and effective results for beginners and pros alike.",
  },
  {
    id: 3,
    title: "Top 5 Workout Tips for Quick Fat Loss",
    image: "/images/fatloss.jpg",
    seoAlt: "Best workout tips for fat loss at Life Fitness Gym Samana",
    short:
      "Follow these proven workout strategies used by Life Fitness Gym trainers...",
    full: "1. Warm up properly. 2. Include HIIT sessions. 3. Balance cardio and strength training. 4. Focus on nutrition. 5. Track progress weekly for consistent fat loss results.",
  },
  {
    id: 4,
    title: "Why Samana Chooses Life Fitness Gym",
    image: "/images/bestgyminsamana.jpeg",
    seoAlt: "Best gym near me in Samana trusted by fitness lovers",
    short:
      "Members share their success stories from Life Fitness Gym Samana...",
    full: "From teenagers to senior citizens, people in Samana trust Life Fitness Gym for clean facilities, expert trainer, and a friendly atmosphere that keeps them coming back.",
  },
  {
    id: 5,
    title: "Healthy Diet Plans by Life Fitness Gym",
    image: "/images/diet.jpg",
    seoAlt: "Healthy diet plans by Life Fitness Gym Samana",
    short:
      "Nutrition is key to fitness. Here are Sahil Sharma’s best diet tips...",
    full: "Balanced meals with proper protein, complex carbs, and good fats are essential. Sahil provides customized diet charts based on age, body type, and fitness goals.",
  },
  {
    id: 6,
    title: "Latest Equipment & Modern Training",
    image: "/images/equipment1.webp",
    seoAlt:
      "Modern gym equipment at Life Fitness Gym Samana - Best gym near me",
    short:
      "Explore the state-of-the-art equipment at Life Fitness Gym Samana...",
    full: "Our gym is equipped with advanced machines and free weights to provide safe and effective training for strength, cardio, and functional workouts.",
  },
];

export default function Blogs() {
  const [activePost, setActivePost] = useState(null);

  return (
    <div className={styles.blogsContainer}>
      <h1 className={styles.heading}>
        Life Fitness Gym Samana – Blogs & Fitness Tips
      </h1>

      <div className={styles.cardsGrid}>
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className={styles.card}
            onClick={() => setActivePost(post)}
          >
            <img
              src={post.image}
              alt={post.seoAlt}
              className={styles.cardImg}
            />
            <div className={styles.cardContent}>
              <h2>{post.title}</h2>
              <p>{post.short}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {activePost && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActivePost(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setActivePost(null)}
            >
              ✕
            </button>
            <img
              src={activePost.image}
              alt={activePost.title}
              className={styles.modalImg}
            />
            <h2>{activePost.title}</h2>
            <p>{activePost.full}</p>
          </div>
        </div>
      )}
    </div>
  );
}
