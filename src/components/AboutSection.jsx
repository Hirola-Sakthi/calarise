import React from "react";
import { motion } from "framer-motion";
// import "./AboutSection.css";

export default function AboutSection() {
  const houseParts = Array.from({ length: 6 }, (_, i) => `../assets/house-parts/part${i+1}.png`);
  console.log(houseParts);
  

  return (
    <section className="about-wrapper">
      <div className="about-left">
        <h3 className="about-title">About Us</h3>

        <h2 className="about-heading">
          Shaping Spaces, Comforting Lives  
        </h2>

        <p className="about-desc">
          Timeless design meets modern comfort for every home and family.  
          At THE CALARIS, we believe great design goes beyond aesthetics —  
          it's about creating spaces that reflect who you are.
        </p>

        <button className="read-more-btn">
          Read More →
        </button>
      </div>

      <div className="about-right">
        <div className="exp-box">
          <span className="exp-number">5+ yrs</span>
          <span className="exp-text">Experience</span>
        </div>

        {/* House assembling animation */}
        <div className="house-container">
          {houseParts.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`part${index + 1}`}
              className="house-piece"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
