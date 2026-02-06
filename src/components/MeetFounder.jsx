import React from "react";
import "./MeetFounder.css";

import FounderImg from "../assets/images/meet-our-founder.webp"; // your left side image
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// import BgLine from "../assets/images/home-slider-1.webp";

export default function MeetFounder() {
  return (
    <section className="founder-section">
      <div className="founder-container">
        {/* LEFT COLUMN */}
        <div className="founder-image-box">
          <img src={FounderImg} alt="Founder" className="founder-image" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="founder-content">
          <h2 className="founder-title allura-font">Meet Our Founder</h2>

          <h3 className="founder-name">RAKESH</h3>
          <p className="founder-text">
            With years of experience in the world of interior design, Rakesh is
            known for turning even the most challenging spaces into masterpieces
            of form and function.
          </p>

          <h3 className="founder-name">RUCHITA</h3>
          <p className="founder-text">
            Ruchita brings together her dual strengths in interior design and
            marketing, making her a dynamic leader with a holistic perspective
            on design and brand storytelling.
          </p>

          <Link to="/about-us#founder" className="founder-btn">
            Read More
            <span className="icon-wrapper">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
