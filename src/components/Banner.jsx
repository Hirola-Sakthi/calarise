import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

import banner1 from "../assets/images/home-slider-1.webp";
import banner2 from "../assets/images/home-slider-2.webp";
import banner3 from "../assets/images/home-slider-3.webp";
import banner4 from "../assets/images/home-slider-4.webp";

export default function Banner() {
  return (
    <div className="banner-section">
      <div className="banner-bottom-shadow"></div>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        className="banner-swiper"
      >
        <SwiperSlide>
          <div
            className="banner-slide"
            style={{ backgroundImage: `url(${banner1})` }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="banner-slide"
            style={{ backgroundImage: `url(${banner2})` }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="banner-slide"
            style={{ backgroundImage: `url(${banner3})` }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="banner-slide"
            style={{ backgroundImage: `url(${banner4})` }}
          />
        </SwiperSlide>
      </Swiper>

      <div className="custom-pagination"></div>

      <div className="banner-content">
        <h1 className="allura-font">
          Transforming interior with elegance, luxury, and modern
        </h1>
      </div>

      {/* <div className="banner-social-fixed">
        <a href="#">
          <BsFacebook />
        </a>
        <a href="#">
          <FaXTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <BsLinkedin />
        </a>
      </div> */}
    </div>
  );
}
