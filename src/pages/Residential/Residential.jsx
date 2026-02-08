import React, { useState, useRef } from "react";
import "./Residential.css";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FiArrowLeft, FiArrowRight, FiArrowUp } from "react-icons/fi";

import imgSmall1 from "../../assets/images/residential-group-img-1.webp";
import imgSmall2 from "../../assets/images/residential-group-img-2.webp";
import imgLarge1 from "../../assets/images/residential-group-img-3.webp";
import imgLarge2 from "../../assets/images/residential-big-img.webp";

export default function Residential() {
  const [activeTab, setActiveTab] = useState(0);

  const [commercialIndex, setCommercialIndex] = useState(0);
  const [turnkeyIndex, setTurnkeyIndex] = useState(0);
  const [residentialIndex, setResidentialIndex] = useState(0);
  const [renovationIndex, setRenovationIndex] = useState(0);

  const tabsRef = useRef(null);
  const livingRef = useRef(null);
  const bedroomRef = useRef(null);
  const kitchenRef = useRef(null);
  const designRef = useRef(null);

  const commercialImages = [imgLarge2, imgSmall2, imgLarge2];
  const turnkeyImages = [imgLarge2, imgSmall2, imgLarge2];
  const residentialImages = [imgLarge2, imgSmall2, imgLarge2];
  const renovationImages = [imgLarge2, imgSmall2, imgLarge2];

  const scrollToSection = (ref, index) => {
    setActiveTab(index);
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const scrollToTabs = () => {
    tabsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const nextImage = (images, setIndex) => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (images, setIndex) => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <NavbarComponent />

      <section className="residential-section">
        <div className="residential-banner">
          <div className="about-page-overlay"></div>
          <div className="banner-title">
            <span className="allura-font">Services</span>
          </div>
        </div>
        <div ref={tabsRef} className="liquid-tabs-wrap">
          <button
            className={`liquid-tab ${activeTab === 0 ? "active" : ""}`}
            onClick={() => scrollToSection(livingRef, 0)}
          >
            Residential
          </button>

          <button
            className={`liquid-tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => scrollToSection(bedroomRef, 1)}
          >
            Commercial
          </button>

          <button
            className={`liquid-tab ${activeTab === 2 ? "active" : ""}`}
            onClick={() => scrollToSection(kitchenRef, 2)}
          >
            Renovation
          </button>

          <button
            className={`liquid-tab ${activeTab === 3 ? "active" : ""}`}
            onClick={() => scrollToSection(designRef, 3)}
          >
            Turnkey
          </button>
        </div>
        <div ref={livingRef} className="residential-content">
          <div className="res-row">
            <div className="res-image-arrow">
              <img src={residentialImages[residentialIndex]} alt="Commercial" />

              <div className="liquid-bg" />

              <div className="liquid-arrows">
                <div
                  className="liquid-arrow-btn left"
                  onClick={() =>
                    prevImage(residentialImages, setResidentialIndex)
                  }
                >
                  <FiArrowLeft />
                </div>

                <div
                  className="liquid-arrow-btn right"
                  onClick={() =>
                    nextImage(residentialImages, setResidentialIndex)
                  }
                >
                  <FiArrowRight />
                </div>
              </div>
            </div>

            <div className="res-text">
              <h3>Residential Designs</h3>
              <p>
                Our residential designs are thoughtfully crafted to create homes
                that are functional, elegant, and deeply personal. We believe a
                home should reflect the lifestyle, taste, and comfort of the
                people who live in it.
              </p>

              <p>
                From compact apartments to luxury villas, we design interiors
                that balance aesthetics with practicality. Every space is
                planned with attention to detail—optimizing layout, lighting,
                materials, and finishes to enhance everyday living.
              </p>

              <h4 class="residential-subtitle">What we specialize in:</h4>

              <ul class="residential-list">
                <li>Living rooms, bedrooms, kitchens & dining spaces</li>
                <li>Customized furniture and storage solutions</li>
                <li>Color palettes, textures & material selection</li>
                <li>Lighting design for comfort and ambiance</li>
                <li>End-to-end residential interior solutions</li>
              </ul>

              <p>
                Each project is a collaboration, transforming ideas into
                personalized spaces that truly feel like home.
              </p>
            </div>
          </div>
        </div>
        <div ref={bedroomRef} className="residential-content">
          <div className="res-row reverse">
            <div className="res-text">
              <h3>Commercial Design</h3>
              <p>
                Our commercial interior designs are driven by functionality,
                brand identity, and user experience. We create spaces that not
                only look impressive but also support productivity, efficiency,
                and business growth.
              </p>
              <p>
                From offices and retail spaces to restaurants and showrooms,
                each project is designed with a strong understanding of
                workflow, customer interaction, and brand values. We balance
                aesthetics with practical planning to deliver spaces that are
                durable, flexible, and visually impactful.
              </p>
              <p>
                Our approach focuses on smart layouts, ergonomic design, and
                thoughtful material selection to ensure long-lasting performance
                and comfort. Every commercial project is executed with
                precision, meeting timelines and business requirements without
                compromising design quality.
              </p>

              <h4 class="residential-subtitle">What we specialize in:</h4>

              <ul class="residential-list">
                <li>Office interiors and workspaces</li>
                <li>Retail stores and showrooms</li>
                <li>Restaurants, cafés & hospitality spaces</li>
                <li>Brand-focused design concepts</li>
                <li>Space planning, lighting & material selection</li>
                <li>Turnkey commercial interior solutions</li>
              </ul>

              <p>
                Each commercial space is designed to strengthen brand presence
                while creating an engaging and functional environment
              </p>
            </div>
            <div className="res-image-arrow">
              <img src={commercialImages[commercialIndex]} alt="Commercial" />

              <div className="liquid-bg" />

              <div className="liquid-arrows">
                <div
                  className="liquid-arrow-btn left"
                  onClick={() =>
                    prevImage(commercialImages, setCommercialIndex)
                  }
                >
                  <FiArrowLeft />
                </div>

                <div
                  className="liquid-arrow-btn right"
                  onClick={() =>
                    nextImage(commercialImages, setCommercialIndex)
                  }
                >
                  <FiArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={kitchenRef} className="residential-content">
          <div className="res-row">
            <div className="res-image-arrow">
              <img src={renovationImages[renovationIndex]} alt="Commercial" />

              <div className="liquid-bg" />

              <div className="liquid-arrows">
                <div
                  className="liquid-arrow-btn left"
                  onClick={() =>
                    prevImage(renovationImages, setRenovationIndex)
                  }
                >
                  <FiArrowLeft />
                </div>

                <div
                  className="liquid-arrow-btn right"
                  onClick={() =>
                    nextImage(renovationImages, setRenovationIndex)
                  }
                >
                  <FiArrowRight />
                </div>
              </div>
            </div>

            <div className="res-text">
              <h3>Renovation & Remodeling</h3>
              <p>
                Our renovation designs transform existing residential and
                commercial spaces into modern, functional, and visually refined
                environments. We focus on enhancing what already
                exists—upgrading layouts, finishes, and utilities while
                preserving the character and purpose of the space.
              </p>
              <p>
                For residential renovations, we reimagine homes to better suit
                evolving lifestyles. From space reconfiguration to material
                upgrades, lighting improvements, and customized storage
                solutions, our designs aim to improve comfort, efficiency, and
                aesthetics.
              </p>

              <p>
                For commercial renovations, we redesign spaces to align with
                current business needs, branding, and customer experience.
                Whether it’s refreshing an office, retail store, or hospitality
                space, we ensure minimal disruption while delivering a strong
                visual and functional impact.
              </p>
              <p>
                Our renovation approach combines smart planning, cost-effective
                solutions, and attention to detail—resulting in spaces that feel
                new, refreshed, and future-ready.
              </p>

              <h4 class="residential-subtitle">What we specialize in:</h4>

              <ul class="residential-list">
                <li>Residential home renovations & upgrades</li>
                <li>Commercial space remodeling</li>
                <li>Layout optimization & space re-planning</li>
                <li>Material, finish & lighting upgrades</li>
                <li>Structural and non-structural modifications</li>
                <li>End-to-end renovation solutions</li>
              </ul>

              <p>
                Each renovation project is carefully planned and executed to
                deliver maximum transformation with lasting value
              </p>
            </div>
          </div>
        </div>
        <div ref={designRef} className="residential-content">
          <div className="res-row reverse">
            <div className="res-text">
              <h3>Turnkey Projects</h3>
              <p>
                Our turnkey interior projects offer complete, hassle-free
                solutions—from concept design to final handover. We manage every
                stage of the project, ensuring a seamless experience with a
                single point of responsibility.
              </p>
              <p>
                From initial planning, design development, and material
                selection to execution, coordination, and installation, our
                turnkey approach ensures consistency in quality, timelines, and
                cost control. Clients receive a ready-to-use space without the
                stress of managing multiple vendors.
              </p>

              <p>
                We deliver turnkey solutions for both residential and commercial
                spaces, customized to meet functional needs, aesthetic
                preferences, and budget requirements. With careful planning and
                attention to detail, we transform ideas into fully finished
                interiors.
              </p>

              <h4 class="residential-subtitle">What we specialize in:</h4>

              <ul class="residential-list">
                <li>Design & space planning</li>
                <li>3D visualization and approvals</li>
                <li>Material sourcing & procurement</li>
                <li>Civil, electrical & plumbing works</li>
                <li>Carpentry, modular furniture & finishes</li>
                <li>Lighting, décor & final installation</li>
                <li>Project management & quality control</li>
              </ul>

              <p>
                Our turnkey projects are defined by transparency, efficiency,
                and timely delivery—ensuring a smooth journey from design to
                completion.
              </p>
            </div>

            <div className="res-image-arrow">
              <img src={turnkeyImages[turnkeyIndex]} alt="Turnkey" />

              <div className="liquid-bg" />

              <div className="liquid-arrows">
                <div
                  className="liquid-arrow-btn left"
                  onClick={() => prevImage(turnkeyImages, setTurnkeyIndex)}
                >
                  <FiArrowLeft />
                </div>

                <div
                  className="liquid-arrow-btn right"
                  onClick={() => nextImage(turnkeyImages, setTurnkeyIndex)}
                >
                  <FiArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="scroll-up-btn" onClick={scrollToTabs}>
          <FiArrowUp />
        </button>
      </section>

      <Footer />
    </>
  );
}
