import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import "./BottomNav.css";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="mobile-bottom-nav">
      <a
        href="https://wa.me/919845921706"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item"
      >
        <FaWhatsapp size={22} />
        <span>WhatsApp</span>
      </a>

      <div className="call-wrapper">
        <a href="tel:+919845921706" className="call-btn">
          <FaPhoneAlt size={26} />
        </a>
      </div>
      <Link to="/services" className="nav-item">
        <MdDesignServices size={22} />
        <span>Services</span>
      </Link>
    </div>
  );
}
