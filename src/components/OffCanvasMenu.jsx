import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./OffCanvasMenu.css";

export default function OffCanvasMenu({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`offcanvas-overlay ${open ? "show" : ""}`}
        onClick={onClose}
      />

      {/* Offcanvas */}
      <div className={`offcanvas-menu ${open ? "open" : ""}`}>
        <div className="offcanvas-header">
          <h3>Menu</h3>
          <FaTimes className="close-icon" onClick={onClose} />
        </div>

        <nav className="offcanvas-links">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/about-us" onClick={onClose}>About</Link>
          <Link to="/services" onClick={onClose}>Services</Link>
          <Link to="/gallery" onClick={onClose}>Gallery</Link>
          <Link to="/blog" onClick={onClose}>Blog</Link>
          <Link to="/testimonial" onClick={onClose}>Testimonial</Link>
          <Link to="/faq" onClick={onClose}>FAQ</Link>
          <Link to="/do-more" onClick={onClose}>Do More</Link>
          <Link to="/contact" onClick={onClose}>Contact</Link>
        </nav>
      </div>
    </>
  );
}
