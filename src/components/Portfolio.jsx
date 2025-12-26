import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./portfolio.css";

import img1 from "../assets/images/home-slider-1.webp";
import img2 from "../assets/images/home-slider-2.webp";
import img3 from "../assets/images/home-slider-3.webp";
import img4 from "../assets/images/home-slider-3.webp";
import img5 from "../assets/images/home-slider-3.webp";
import video1 from "../assets/images/home-slider-3.webp"; 
import { FaImage, FaVideo } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

export default function Portfolio() {
  const [mode, setMode] = useState("image");

  const images = [img1, img2, img3, img4, img5]; 

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title allura-font">Portfolio</h2>

      <div className="portfolio-card">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500, // ✅ Auto scroll every 2.5s
            disableOnInteraction: false,
          }}
          speed={800}
        >
          {mode === "image" ? (
            images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`slide-${index}`} />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <video src={video1} autoPlay loop muted />
            </SwiperSlide>
          )}
        </Swiper>

        {/* ✅ Image / Video Toggle */}
        <div className="media-buttons">
          <button onClick={() => setMode("image")} aria-label="Show Images">
            Images
            <span className="icon-wrapper">
              <FaImage />
            </span>
          </button>

          <button onClick={() => setMode("video")} aria-label="Show Video">
            Video
            <span className="icon-wrapper">
              <FiYoutube   />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
