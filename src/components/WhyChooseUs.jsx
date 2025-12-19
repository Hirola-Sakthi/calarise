import React from "react";
import "./WhyChooseUs.css";
import { FaHome, FaCheck, FaUserCheck } from "react-icons/fa";
import roomImg from "../assets/images/home-slider-1.webp";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
    
        <div className="why-image-box">
          <img src={roomImg} alt="Interior Design" />
        </div>

        <div className="why-content-box">
          <h2 className="why-title allura-font">Why Choose Us</h2>

          <p className="why-subtitle">
            We design sofas that make every moment at home relaxing and enjoyable.
          </p>

          <div className="why-cards">

            <button className="why-btn">
              <span className="icon">
                <FaHome />
              </span>
              <span className="text">
                Timeless Design & Style Trends
              </span>
            </button>

            <button className="why-btn">
              <span className="icon">
                <FaCheck />
              </span>
              <span className="text">
                Made with High-Quality Materials
              </span>
            </button>

            <button className="why-btn">
              <span className="icon">
                <FaUserCheck />
              </span>
              <span className="text">
                Expertise You Can Trust
              </span>
            </button>

            <button className="why-btn">
              <span className="icon">
                <FaUserCheck />
              </span>
              <span className="text">
                Timeless Design & Style Trends
              </span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
