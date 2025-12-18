import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";

/* FIRST SET */
import roof from "../assets/house-parts/desk1.webp";
import wallLeft from "../assets/house-parts/Layer-3.webp";
import wallRight from "../assets/house-parts/Layer-7.webp";
import floor from "../assets/house-parts/Layer-10.webp";
import sofa from "../assets/house-parts/sofa.webp";
import plant from "../assets/house-parts/plant.webp";
import plant2 from "../assets/house-parts/Plant-1.webp";
import lamp from "../assets/house-parts/Ceilling-light.webp";
import table from "../assets/house-parts/lamp.webp";
import chair from "../assets/house-parts/Layer-5.webp";
import windowImg from "../assets/house-parts/Layer-6.webp";
import frame from "../assets/house-parts/Layer-8.webp";
import rug from "../assets/house-parts/Layer-9.webp";

/* SECOND SET */
import roof2 from "../assets/house-parts/desk1.webp";
import wallLeft2 from "../assets/house-parts/Layer-3.webp";
import wallRight2 from "../assets/house-parts/Layer-7.webp";
import floor2 from "../assets/house-parts/Layer-10.webp";
import sofa2 from "../assets/house-parts/sofa.webp";
import plant3 from "../assets/house-parts/plant.webp";
import plant4 from "../assets/house-parts/Plant-1.webp";
import lamp2 from "../assets/house-parts/Ceilling-light.webp";
import table2 from "../assets/house-parts/lamp.webp";
import chair2 from "../assets/house-parts/Layer-5.webp";
import windowImg2 from "../assets/house-parts/Layer-6.webp";
import frame2 from "../assets/house-parts/Layer-8.webp";
import rug2 from "../assets/house-parts/Layer-9.webp";

export default function AboutUs() {
  const [assembled, setAssembled] = useState(true);
  const [currentSet, setCurrentSet] = useState(1);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const DISASSEMBLE_TIME = 1000;
  const PAUSE_TIME = 700;
  const START_DELAY = 1200;

  const imagesSet = {
    1: { roof, wallLeft, wallRight, floor, sofa, plant, plant2, lamp, table, chair, windowImg, frame, rug },
    2: { roof: roof2, wallLeft: wallLeft2, wallRight: wallRight2, floor: floor2, sofa: sofa2, plant: plant3, plant2: plant4, lamp: lamp2, table: table2, chair: chair2, windowImg: windowImg2, frame: frame2, rug: rug2 },
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
            setCurrentSet(prev => (prev === 1 ? 2 : 1));
            requestAnimationFrame(() => setAssembled(true));
          }, DISASSEMBLE_TIME + PAUSE_TIME);

        }, START_DELAY);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const images = imagesSet[currentSet];

  return (
    <section className="about-assemble" ref={sectionRef}>

      {/* TOP DOTS */}
      <div className="top-dots">
        <span></span><span></span><span></span><span></span>
      </div>

      {/* LEFT CONTENT */}
      <div className="content">
        <span className="tag">About Us</span>
        <h2>
          Shaping Spaces, Comforting Lives <br />
          Timeless design meets modern comfort
        </h2>
        <p>
          At THE CALARIS, we believe great design goes beyond aesthetics.
          It’s about creating spaces that reflect who you are.
        </p>

        <button className="read-more">
          Read More <span>→</span>
        </button>
      </div>

      {/* EXPERIENCE BADGE */}
      <div className="experience-badge">
        <h3>5+ yrs</h3>
        <p>Experience</p>
      </div>

      {/* IMAGE ASSEMBLY */}
      <div className="assemble-wrapper">
        {Object.entries(images).map(([key, src]) => (
          <img
            key={key}
            src={src}
            alt=""
            className={`assemble-part ${key} ${assembled ? "assembled" : "disassembled"}`}
          />
        ))}

        {/* BOTTOM BACKGROUND */}
        <div className="bottom-bg"></div>
      </div>
    </section>
  );
}
