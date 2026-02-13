import React, { useState, useRef, useEffect } from "react";
import "./Gallery.css";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import imgSmall1 from "../../assets/images/calaris-gallery-image-1.webp";
import imgSmall2 from "../../assets/images/calaris-gallery-image-2.webp";
import imgSmall3 from "../../assets/images/calaris-gallery-image-3.webp";
import imgSmall4 from "../../assets/images/calaris-gallery-image-4.webp";
import imgSmall5 from "../../assets/images/calaris-gallery-image-5.webp";
import imgSmall6 from "../../assets/images/calaris-gallery-image-6.webp";
import galleryVideo from "../../assets/images/calaris.mp4";
import { FiYoutube } from "react-icons/fi";
import { useLocation } from "react-router-dom";

/* ---------------- REUSABLE GRID ---------------- */
const GalleryGrid = ({ images, bigImage, videoPoster, videoSrc }) => {
  const gridRefs = useRef([]);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

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

    gridRefs.current.forEach((el) => el && observer.observe(el));
    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      gridRefs.current.forEach((el) => el && observer.unobserve(el));
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="gallery-grid-wrapper">
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item small"
            ref={(el) => (gridRefs.current[i] = el)}
          >
            <img src={img} alt={`Gallery ${i}`} />
          </div>
        ))}

        <div
          className="gallery-item big"
          ref={(el) => (gridRefs.current[images.length] = el)}
        >
          <img src={bigImage} alt="Big Gallery" />
        </div>

        <div className="gallery-item gallery-video" ref={videoRef}>
          {!showVideo ? (
            <>
              <img src={videoPoster} alt="Video" />
              <button className="video-btn" onClick={() => setShowVideo(true)}>
                Video
                <span className="gallery-icon-wrapper">
                  <FiYoutube />
                </span>
              </button>
            </>
          ) : (
            <video
              className="gallery-video-player"
              src={videoSrc}
              controls
              autoPlay
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0);

  const gridImages = [imgSmall1, imgSmall2, imgSmall3, imgSmall4];
  const bigImage = imgSmall5;

  const location = useLocation();

  useEffect(() => {
    if (location.state?.tabIndex !== undefined) {
      setActiveTab(location.state.tabIndex);
    }
  }, [location.state]);

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
        <div className="liquid-tabs-wrap">
          {["Living Room", "Kids Room", "Bed Room", "Renovation"].map(
            (tab, index) => (
              <button
                key={index}
                className={`liquid-tab ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ),
          )}
        </div>
        {activeTab === 0 && (
          <>
            <GalleryGrid
              images={gridImages}
              bigImage={bigImage}
              videoPoster={imgSmall6}
              videoSrc={galleryVideo}
            />
            <GalleryGrid
              images={gridImages}
              bigImage={bigImage}
              videoPoster={imgSmall6}
              videoSrc={galleryVideo}
            />
          </>
        )}

        {activeTab === 1 && (
          <>
            <GalleryGrid
              images={gridImages}
              bigImage={bigImage}
              videoPoster={imgSmall6}
              videoSrc={galleryVideo}
            />
            <GalleryGrid
              images={gridImages}
              bigImage={bigImage}
              videoPoster={imgSmall6}
              videoSrc={galleryVideo}
            />
          </>
        )}

        {activeTab === 2 && (
          <>
            <GalleryGrid
              images={gridImages}
              bigImage={bigImage}
              videoPoster={imgSmall6}
              videoSrc={galleryVideo}
            />
            <GalleryGrid
              images={gridImages}
              bigImage={bigImage}
              videoPoster={imgSmall6}
              videoSrc={galleryVideo}
            />
          </>
        )}

        {activeTab === 3 && (
          <>
            <GalleryGrid
              images={gridImages}
              bigImage={bigImage}
              videoPoster={imgSmall6}
              videoSrc={galleryVideo}
            />
            <GalleryGrid
              images={gridImages}
              bigImage={bigImage}
              videoPoster={imgSmall6}
              videoSrc={galleryVideo}
            />
          </>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
