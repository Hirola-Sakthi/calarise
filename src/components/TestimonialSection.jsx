import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa";
import "./TestimonialSection.css";

import profilePic1 from "../assets/images/testimonial-image.webp";
import profilePic2 from "../assets/images/testimonial-common-dp-img.webp";
import profilePic3 from "../assets/images/testimonial-common-dp-img.webp";
import profilePic4 from "../assets/images/testimonial-common-dp-img.webp";

import { Link } from "react-router-dom";

const testimonialData = [
  {
    text: `"Calarise Interiors transformed our apartment beautifully. The design was elegant, functional, and perfectly aligned with our lifestyle. The team was extremely professional and transparent throughout."`,
    author: "Arjun Raghavan",
    rating: "★★★★★",
    image: profilePic2,
  },
  {
    text: `"From concept to execution, Calarise Interiors exceeded my expectations. The attention to detail and material quality truly reflect a premium interior brand."`,
    author: "Sneha Iyer",
    rating: "★★★★★",
    image: profilePic3,
  },
  {
    text: `"The interiors reflect warmth, elegance, and thoughtful planning. Calarise Interiors brought our vision to life with a perfect balance of aesthetics and comfort."`,
    author: "Vikram Nair",
    rating: "★★★★★",
    image: profilePic4,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialData.length) % testimonialData.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const { text, author, rating, image } = testimonialData[currentIndex];

  return (
    <section className="ts-section">
      <h2 className="ts-title allura-font">
        Real Stories, Real Impact: Hear from Our Satisfied Clients
      </h2>

      <div className="ts-content">
        <button className="ts-arrow ts-arrow-left" onClick={handlePrev}>
          <FaAngleLeft size={28} />
        </button>
        <div className="ts-card">
          <img src={profilePic1} alt="Client" className="ts-image" />

          <Link
            to={`/testimonial`}
            className="ts-play"
            onClick={(e) => e.stopPropagation()}
          >
            <FaPlay />
          </Link>
        </div>
        <div className="ts-text-area">
          <p className="ts-text">{text}</p>

          <div className="ts-author">
            <img src={image} alt={author} className="ts-author-pic" />
            <div>
              <h4 className="ts-author-name">{author}</h4>
              <div className="ts-author-stars">{rating}</div>
            </div>
          </div>
        </div>
        <button className="ts-arrow ts-arrow-right" onClick={handleNext}>
          <FaAngleRight size={28} />
        </button>
      </div>
    </section>
  );
}
