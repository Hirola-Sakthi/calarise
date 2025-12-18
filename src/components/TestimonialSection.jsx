import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa";
import "./TestimonialSection.css";

import profilePic1 from "../assets/images/testimonial-image.webp";
import profilePic2 from "../assets/images/testimonial-image.webp";
import profilePic3 from "../assets/images/testimonial-image.webp";

const testimonialData = [
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud".`,
    author: "Sameer Rai",
    rating: "★★★★★",
    image: profilePic1,
  },
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud"`,
    author: "Ananya Sharma",
    rating: "★★★★☆",
    image: profilePic2,
  },
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud"`,
    author: "Rahul Mehta",
    rating: "★★★★★",
    image: profilePic3,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
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
        {/* LEFT ARROW */}
        <button className="ts-arrow ts-arrow-left" onClick={handlePrev}>
          <FaAngleLeft size={30} />
        </button>

        {/* IMAGE CARD */}
        <div className="ts-card">
          <img src={image} alt="Client" className="ts-image" />
          <button className="ts-play">
            <FaPlay />
          </button>
        </div>

        {/* TEXT */}
        <div className="ts-text-area">
          <p className="ts-text">{text}</p>

          <div className="ts-author">
            <img src={image} alt="Author" className="ts-author-pic" />
            <div>
              <h4 className="ts-author-name">{author}</h4>
              <div className="ts-author-stars">{rating}</div>
            </div>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button className="ts-arrow ts-arrow-right" onClick={handleNext}>
          <FaAngleRight size={30}/>
        </button>
      </div>
    </section>
  );
}
