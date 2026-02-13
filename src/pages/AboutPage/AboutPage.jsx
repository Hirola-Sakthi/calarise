import React, { useEffect, useRef } from "react";
import "./AboutPage.css";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicesSection from "../../components/ServicesSection";
import Founder from "./Founder/Founder";
import VisionSection from "./VisionSection/VisionSection";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
  const founderRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "founder") {
      founderRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <>
      <NavbarComponent />

      <div className="about-page-section">
        <div className="about-page-banner">
          <div className="about-page-overlay"></div>

          <div className="banner-title">
            <span className="allura-font">About Us</span>
          </div>
        </div>

        <div className="about-content-wrapper">
          <div className="about-content-inner">
            <div className="content-line top"></div>

            <p>
              At <strong>THE CALARIS</strong>, we believe that great design goes
              beyond aesthetics — it’s about creating spaces that reflect who
              you are, how you live, and what inspires you. Based in{" "}
              <span>[City/Region]</span>, we are a full-service interior design
              firm specializing in residential, commercial, and bespoke design
              solutions.
            </p>

            <p>
              Our approach is rooted in collaboration, creativity, and
              functionality. Whether you're refreshing a single room or
              reimagining an entire property, we work closely with you to
              understand your vision, needs, and lifestyle — then bring it to
              life with elegance and intention.
            </p>

            <p>
              With a keen eye for detail and a deep passion for design, our team
              blends timeless style with modern sensibilities. From concept to
              completion, we manage every phase of the process with precision,
              care, and a commitment to quality.
            </p>

            <p className="closing-text">
              Let’s create something beautiful — together.
            </p>

            <div className="content-line bottom"></div>
          </div>
        </div>
        <ServicesSection />
        <div ref={founderRef}>
          <Founder />
        </div>
        <VisionSection />
        {/* What Makes Us Different */}
        <div className="difference-section">
          <div className="difference-container">
            <h2 className="difference-title">What Makes Us Different</h2>

            <div className="difference-list">
              <div className="difference-item">
                <span className="difference-icon"></span>
                <p>
                  For us, design is not just about how a space looks — it’s
                  about how it feels to live in it. We believe every home and
                  every workplace should be a true reflection of the people who
                  use it.
                </p>
              </div>

              <div className="difference-item">
                <span className="difference-icon"></span>
                <p>
                  Designed Around You — We listen first. Every design begins
                  with understanding your story, your lifestyle, and your needs.
                </p>
              </div>

              <div className="difference-item">
                <span className="difference-icon"></span>
                <p>
                  Creativity with Purpose — Beauty matters, but so does comfort.
                  We balance elegance with practicality to create spaces you’ll
                  enjoy every day.
                </p>
              </div>

              <div className="difference-item">
                <span className="difference-icon"></span>
                <p>
                  Turning Challenges into Ideas — No two spaces are alike, and
                  that excites us. We embrace design challenges and transform
                  them into unique solutions.
                </p>
              </div>

              <div className="difference-item">
                <span className="difference-icon"></span>
                <p>
                  A Human Touch — With our combined expertise in design and
                  communication, we make the process simple, transparent, and
                  enjoyable.
                </p>
              </div>

              <div className="difference-item">
                <span className="difference-icon"></span>
                <p>
                  Lasting Impressions — It’s the small details that make a big
                  difference. Our designs are crafted to feel timeless,
                  personal, and welcoming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
