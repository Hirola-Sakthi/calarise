import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";

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
import plantImg from "../assets/house-parts/plant-1.webp";

import { FaArrowRight } from "react-icons/fa";

export default function AboutUs() {
  const [assembled, setAssembled] = useState(true);
  const [currentSet, setCurrentSet] = useState(1);

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const imagesSet = {
    1: { wallLeft, wallRight, floor, sofa, lamp },
    2: { wallLeft: wallLeft2, wallRight: wallRight2, floor: floor2, lamp: lamp2 }
  };

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
          }, 1300);
        }, 1000);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const images = imagesSet[currentSet];

  return (
    <section className="about-assemble" ref={sectionRef}>

      {/* BACKGROUND IMAGE */}
      <div className="about-bg">
        <img src={bgImage} alt="" />
      </div>

      {/* CONTENT */}
      <div className="content">
        <span className="tag allura-font">About Us</span>

        <h2>
          Shaping Spaces, Comforting Lives <br />
          Timeless design meets modern comfort
        </h2>

        <p>
          At THE CALARIS, we believe that great design goes
          beyond aesthetics — it’s about creating spaces
          that reflect who you are, how you live, and what inspires you.
        </p>

        <button className="read-more">
          Read More <span><FaArrowRight /></span>
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
  );
}
