// src/components/FloatingMenu.jsx
import React, { useState } from "react";
import { IoAdd, IoCall } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./SocialFloating.css";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-wrapper">
      {open && (
        <div className="floating-icons">
          <a href="tel:+919845921706">
            <IoCall />
          </a>
          <a href="https://wa.me/919845921706" target="_blank">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/thecalaris?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <FaInstagram />
          </a>
        </div>
      )}

      <button
        className={`floating-btn ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <IoAdd size={65} className={`plus-icon ${open ? "rotate" : ""}`} />
      </button>
    </div>
  );
}
