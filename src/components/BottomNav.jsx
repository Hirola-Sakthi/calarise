import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import "./BottomNav.css";
import { SiSmartthings } from "react-icons/si";

export default function BottomNav() {
  return (
    <div className="mobile-bottom-nav">
      <a href="/packages" className="nav-item">
        <SiSmartthings  size={22} />
        <span>About</span>
      </a>
      <a href="tel:+919876543210" className="call-btn">
        <FaPhoneAlt size={26} />
      </a>
      <a href="/contact" className="nav-item">
        <MdDesignServices  size={22} />
        <span>Services</span>
      </a>
    </div>
  );
}
