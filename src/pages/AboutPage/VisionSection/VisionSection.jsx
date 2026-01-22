import React, { useEffect, useRef } from "react";
import "./VisionSection.css";

import LeftBg from "../../../assets/images/vision-section-left-img.webp";
import MainImage from "../../../assets/images/vision-section-right-img.webp";
import PlayIcon from "../../../assets/images/vison-section-play-img.webp";

export default function VisionSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision-section">
      <div className="vision-container">
        {/* LEFT */}
        <div className="vision-left slide-left" ref={leftRef}>
          <img
            src={LeftBg}
            alt="Vision Background"
            className="vision-left-img"
          />

          <div className="vision-card">
            <h2 className="vision-title">Vision</h2>
            <p className="vision-text">
              Our vision is to transform spaces into timeless reflections of
              beauty, comfort, and individuality—where every detail tells a
              story, and every design inspires a sense of belonging.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="vision-right slide-right" ref={rightRef}>
          <img
            src={MainImage}
            alt="Interior Design"
            className="vision-main-img"
          />

          <div className="vision-play">
            <img src={PlayIcon} alt="Play" />
          </div>
        </div>
      </div>
    </section>
  );
}
