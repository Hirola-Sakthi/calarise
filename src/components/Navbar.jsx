import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "./Navbar.css";

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const moreOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const moreRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="glass-navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>

        {/* More Dropdown */}
        <div
          className="more-link"
          ref={moreRef}
          onClick={() => setMoreOpen(!moreOpen)}
        >
          More <FaChevronDown className="down-arrow" />
        </div>

        {moreOpen &&
          moreOptions.map((option, idx) => (
            <a
              key={idx}
              href={`#${option.toLowerCase().replace(" ", "")}`}
              className="dropdown-item"
            style={{ top: `${70 + idx * 50}px`, width: '170px' }}             
            >
              {option}
            </a>
          ))}

        <a href="#contact" className="contact-link">
          Contact
        </a>
      </div>

      <FaBars
        className="menu-icon-mobile"
        onClick={() => setOpen(!open)}
      />
    </nav>
  );
}
