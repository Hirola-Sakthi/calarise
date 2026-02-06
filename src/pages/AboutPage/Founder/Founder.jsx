import React, { useEffect, useRef } from "react";
import "./Founder.css";

import founder1 from "../../../assets/images/founder-1.jpeg";
import founder2 from "../../../assets/images/founder-2.jpeg";
import bgImage from "../../../assets/images/about-page-founder-bg.webp";

const Founder = () => {
  const contentLeftRef = useRef(null);
  const imageTopRef = useRef(null);
  const imageBottomRef = useRef(null);
  const contentRightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.25 },
    );

    [contentLeftRef, imageTopRef, imageBottomRef, contentRightRef].forEach(
      (ref) => {
        if (ref.current) observer.observe(ref.current);
      },
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="our-founder-section" id="founder"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="our-founder-container">
        <div className="our-founder-title">
          <h2>Founders</h2>
        </div>
        <div className="our-founder-row">
          <div className="our-founder-text slide-left" ref={contentLeftRef}>
            <h3>Rakesh</h3>
            <p>
              With years of experience in the world of interior design, Rakesh
              is known for turning even the most challenging spaces into
              masterpieces of form and function. He thrives on
              complexity—whether it’s reimagining compact layouts, blending
              modern elements with traditional aesthetics, or creating bold,
              innovative concepts that push boundaries. His approach is rooted
              in precision, technical mastery, and a relentless passion for
              detail. For Rakesh, every challenge is an opportunity to innovate,
              and every project is a canvas where creativity meets purpose. His
              strong design vision and problem-solving mindset have made him a
              trusted expert for clients seeking interiors that are not only
              visually stunning but also deeply functional and enduring.
            </p>
          </div>

          <div className="our-founder-card slide-top" ref={imageTopRef}>
            <img src={founder1} alt="Rakesh" />
            <div className="our-founder-info">
              <h4 className="our-founder-name">Rakesh</h4>
              <span className="our-founder-role">FOUNDER</span>
              <div className="our-founder-underline"></div>
            </div>
          </div>
        </div>
        <div className="our-founder-row reverse">
          <div className="our-founder-text slide-right" ref={contentRightRef}>
            <h3>Ruchita Ranjan</h3>
            <p>
              Ruchita brings together her dual strengths in interior design and
              marketing, making her a dynamic leader with a holistic perspective
              on design and brand storytelling. With a designer’s eye, she
              curates interiors that embody elegance, warmth, and individuality.
              At the same time, her marketing expertise allows her to deeply
              understand people, lifestyles, and aspirations—ensuring that each
              project resonates not just visually, but emotionally. Ruchita
              believes that every space has a story, and her unique ability to
              merge creativity with communication ensures those stories are told
              with authenticity and impact. Her role goes beyond design; she
              builds meaningful connections with clients and helps shape the
              firm’s identity in the marketplace.
            </p>
          </div>

          <div
            className="our-founder-card-second slide-bottom"
            ref={imageBottomRef}
          >
            <img src={founder2} alt="Ruchitha" />
            <div className="our-founder-info">
              <h4 className="our-founder-name">Ruchita Ranjan</h4>
              <span className="our-founder-role">FOUNDER</span>
              <div className="our-founder-underline"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
