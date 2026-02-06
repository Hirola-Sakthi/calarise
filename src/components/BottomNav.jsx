import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { SiSmartthings } from "react-icons/si";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <div className="mobile-bottom-nav">
      <a href="/about-us" className="nav-item">
        <SiSmartthings size={22} />
        <span>About</span>
      </a>
      <div className="call-wrapper">
        <a href="tel:+919845921706" className="call-btn">
          <FaPhoneAlt size={26} />
        </a>
      </div>
      <a href="/services" className="nav-item">
        <MdDesignServices size={22} />
        <span>Services</span>
      </a>
    </div>
  );
}
