import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./ServicesSection.css";

import img1 from "../assets/images/home-slider-1.webp";
import img2 from "../assets/images/home-slider-2.webp";
import img3 from "../assets/images/home-slider-3.webp";
import img4 from "../assets/images/home-slider-4.webp";
// import img5 from "../assets/images/home-slider-1.webp";
// import img6 from "../assets/images/home-slider-2.webp";

export default function ServicesSection() {
  const items = [
    { img: img1, title: "Residential" },
    { img: img2, title: "Commercial" },
    { img: img3, title: "Renovation" },
    { img: img4, title: "Trun Key" },
    { img: img1, title: "Residential" },
    { img: img2, title: "Commercial" },
  ];

  return (
   <section className="services-section">
  <div className="container">
    <h2 className="services-title allura-font">The Calaris Services</h2>
  </div>

  {/* Swiper outside container → full width */}
  <div className="services-swiper-wrap">
  <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2500 }}
    modules={[Pagination, Autoplay]}
    className="services-swiper"
    breakpoints={{
      0: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      992: { slidesPerView: 3, spaceBetween: 30 },
    }}
  >
    {items.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="service-card">
          <img src={item.img} className="service-img" alt={item.title} />
          <div className="service-title">{item.title}</div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

</section>

  );
}
