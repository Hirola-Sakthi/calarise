import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";
import "./WhyChooseUs.css";
import { FaHome, FaCheck, FaUserCheck } from "react-icons/fa";
import roomImg from "../assets/images/why-choose-us.webp";

/* SET 1 */
import wallLeft from "../assets/house-parts/left-wall.png";
import wallRight from "../assets/house-parts/right-wall.png";
import floor from "../assets/house-parts/floor.png";
import sofa from "../assets/house-parts/sofa.png";
import lamp from "../assets/house-parts/ceilling-light.png";

/* SET 2 */
import wallLeft2 from "../assets/house-parts/left-wall-2.png";
import wallRight2 from "../assets/house-parts/right-wall-2.png";
import floor2 from "../assets/house-parts/floor-2.png";
import lamp2 from "../assets/house-parts/ceilling-light-2.png";

/* EXTRA IMAGES */
import bgImage from "../assets/house-parts/floor-2.png";
import plantImg from "../assets/house-parts/plant-1.jpg";

import Vector from "../assets/images/vector.png";


import { FaArrowRight } from "react-icons/fa";

export default function AboutUs() {
  const [assembled, setAssembled] = useState(true);
  const [currentSet, setCurrentSet] = useState(1);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const imagesSet = {
    1: { wallLeft, wallRight, floor, sofa, lamp },
    2: {
      wallLeft: wallLeft2,
      wallRight: wallRight2,
      floor: floor2,
      lamp: lamp2,
    },
  };

  const START_DELAY = 1000;
  const DISASSEMBLE_DURATION = 1000;

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || hasAnimated.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        hasAnimated.current = true;

        setTimeout(() => {
          setAssembled(false);

          setTimeout(() => {
            setCurrentSet(2);
            requestAnimationFrame(() => setAssembled(true));
          }, DISASSEMBLE_DURATION);
        }, START_DELAY);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const images = imagesSet[currentSet];

 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      },
      { threshold: 0.1 } 
    );

    const elements = containerRef.current.querySelectorAll(".scroll-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);


  return (
    <section className="about-wrapper">
  <div className="vector-bg">
    <img src={Vector} alt="decorative vector" />
  </div>
    <section className="about-assemble" ref={sectionRef}>
      
      {/* BACKGROUND IMAGE */}
      {/* <div className="about-bg">
        <img src={bgImage} alt="" />
      </div> */}

      {/* CONTENT */}
      <div className="content">
        <span className="tag allura-font">About Us</span>

        <h2>
          Shaping Spaces, Comforting Lives
          Timeless design meets modern comfort for every home and family.
        </h2>

        <p>
          At THE CALARIS, we believe that great design goes<br/> beyond aesthetics —
          it’s about creating spaces that <br/> reflect who you are, how you live, and
          what inspires you.
        </p>

        <button className="read-more">
          Read More{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>

        {/* PLANT IMAGE */}
        <div className="plant-image">
          <img src={plantImg} alt="plant" />
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="experience-badge">
        <h3>5+ yrs</h3>
        <p>Experience</p>
      </div>

      {/* ASSEMBLY */}
      <div className={`assemble-wrapper set-${currentSet}`}>
        {Object.entries(images).map(([key, src]) => (
          <img
            key={key}
            src={src}
            alt=""
            className={`assemble-part ${key} ${
              assembled ? "assembled" : "disassembled"
            }`}
          />
        ))}
      </div>
    </section>


     <section className="why-choose-section"  ref={containerRef}>
          <div className="why-choose-container ">
        
            <div className="why-image-box">
              <img src={roomImg} alt="Interior Design" className="scroll-up" />
            </div>
    
            <div className="why-content-box scroll-up">
              <h2 className="why-title allura-font">Why Choose Us</h2>
    
              <p className="why-subtitle">
                We design sofas that make every moment at home relaxing and enjoyable.
              </p>
    
              <div className="why-cards">
    
                <button className="why-btn scroll-up">
                  <span className="icon">
                    <FaHome />
                  </span>
                  <span className="text">
                    Timeless Design & Style Trends
                  </span>
                </button>
    
                <button className="why-btn scroll-up">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  <span className="text">
                    Made with High-Quality Materials
                  </span>
                </button>
    
                <button className="why-btn scroll-up">
                  <span className="icon">
                    <FaUserCheck />
                  </span>
                  <span className="text">
                    Expertise You Can Trust
                  </span>
                </button>
    
                <button className="why-btn scroll-up">
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
    </section>
  );
}
