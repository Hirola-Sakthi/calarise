import React, { useRef, useState, useEffect } from "react";
import "./Gallery.css";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";

import imgSmall1 from "../../assets/images/calaris-gallery-image-1.webp";
import imgSmall2 from "../../assets/images/calaris-gallery-image-2.webp";
import imgSmall3 from "../../assets/images/calaris-gallery-image-3.webp";
import imgSmall4 from "../../assets/images/calaris-gallery-image-4.webp";
import imgSmall5 from "../../assets/images/calaris-gallery-image-5.webp";
import imgSmall6 from "../../assets/images/calaris-gallery-image-6.webp";
import { FiYoutube } from "react-icons/fi";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);

  const tabsRef = useRef(null);
  const livingRef = useRef(null);
  const kidsRef = useRef(null);
  const bedRef = useRef(null);
  const renovationRef = useRef(null);

  const firstGridRefs = useRef([]);
  const secondGridRefs = useRef([]);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const scrollToSection = (ref, index) => {
    setActiveTab(index);
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 },
    );

    firstGridRefs.current.forEach((el) => el && observer.observe(el));
    secondGridRefs.current.forEach((el) => el && observer.observe(el));
    if (videoRef1.current) observer.observe(videoRef1.current);
    if (videoRef2.current) observer.observe(videoRef2.current);

    return () => {
      firstGridRefs.current.forEach((el) => el && observer.unobserve(el));
      secondGridRefs.current.forEach((el) => el && observer.unobserve(el));
      if (videoRef1.current) observer.unobserve(videoRef1.current);
      if (videoRef2.current) observer.unobserve(videoRef2.current);
    };
  }, []);

  const firstGridImages = [imgSmall1, imgSmall2, imgSmall3, imgSmall4];
  const firstGridBigImage = imgSmall5;

  const secondGridImages = [imgSmall1, imgSmall2, imgSmall3, imgSmall4];
  const secondGridBigImage = imgSmall5;

  return (
    <>
      <NavbarComponent />

      <section className="gallery-section">
        <div className="gallery-banner">
          <div className="gallery-overlay"></div>
          <div className="banner-title">
            <span className="allura-font">Gallery</span>
          </div>
        </div>
        <div ref={tabsRef} className="liquid-tabs-wrap">
          <button
            className={`liquid-tab ${activeTab === 0 ? "active" : ""}`}
            onClick={() => scrollToSection(livingRef, 0)}
          >
            Living Room
          </button>
          <button
            className={`liquid-tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => scrollToSection(kidsRef, 1)}
          >
            Kids Room
          </button>
          <button
            className={`liquid-tab ${activeTab === 2 ? "active" : ""}`}
            onClick={() => scrollToSection(bedRef, 2)}
          >
            Bed Room
          </button>
          <button
            className={`liquid-tab ${activeTab === 3 ? "active" : ""}`}
            onClick={() => scrollToSection(renovationRef, 3)}
          >
            Renovation
          </button>
        </div>
        <div ref={livingRef} className="gallery-grid-wrapper">
          <div className="gallery-grid">
            {firstGridImages.map((img, i) => (
              <div
                key={i}
                className="gallery-item small"
                ref={(el) => (firstGridRefs.current[i] = el)}
              >
                <img src={img} alt={`Gallery ${i}`} />
              </div>
            ))}
            <div
              className="gallery-item big"
              ref={(el) => (firstGridRefs.current[firstGridImages.length] = el)}
            >
              <img src={firstGridBigImage} alt="Big Gallery" />
            </div>

            <div className="gallery-item gallery-video" ref={videoRef1}>
              {!showVideo1 ? (
                <>
                  <img src={imgSmall6} alt="Video" />
                  <button
                    className="video-btn"
                    onClick={() => setShowVideo1(true)}
                  >
                    Video
                    <span className="gallery-icon-wrapper">
                      <FiYoutube />
                    </span>
                  </button>
                </>
              ) : (
                <video
                  className="gallery-video-player"
                  src="../../assets/images/calaris.mp4"
                  controls
                  autoPlay
                />
              )}
            </div>
          </div>
        </div>
        <div
          ref={kidsRef}
          className="gallery-grid-wrapper"
          style={{ marginTop: "50px" }}
        >
          <div className="gallery-grid">
            {secondGridImages.map((img, i) => (
              <div
                key={i + 10}
                className="gallery-item small"
                ref={(el) => (secondGridRefs.current[i] = el)}
              >
                <img src={img} alt={`Gallery ${i}`} />
              </div>
            ))}

            <div
              className="gallery-item big"
              ref={(el) =>
                (secondGridRefs.current[secondGridImages.length] = el)
              }
            >
              <img src={secondGridBigImage} alt="Big Gallery" />
            </div>

            <div className="gallery-item gallery-video" ref={videoRef2}>
              {!showVideo2 ? (
                <>
                  <img src={imgSmall6} alt="Video" />
                  <button
                    className="video-btn"
                    onClick={() => setShowVideo2(true)}
                  >
                    Video
                    <span className="gallery-icon-wrapper">
                      <FiYoutube />
                    </span>
                  </button>
                </>
              ) : (
                <video
                  className="gallery-video-player"
                  src="../../assets/images/calaris.mp4"
                  controls
                  autoPlay
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
