import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const moreOptions = ["Blog", "Testimonial", "FAQ", "Do More"];
  const servicesOptions = [
    "Residential",
    "Commerical",
    "Renovation",
    "Turn Key",
  ];

  const moreRef = useRef(null);
  const servicesRef = useRef(null);

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="glass-navbar">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" className="home-link">
          Home
        </Link>

        <Link to="/about-us">About</Link>

        <Link to="/services">Services</Link>

        <a href="#gallery">Gallery</a>

        {/* MORE DROPDOWN */}
        <div ref={moreRef} style={{ position: "relative" }}>
          <div className="more-link" onClick={() => setMoreOpen(!moreOpen)}>
            More <FaChevronDown className="down-arrow" />
          </div>

          {moreOpen &&
            moreOptions.map((option, idx) => (
              <Link
                key={idx}
                to={`/${option.toLowerCase().replace(/\s+/g, "-")}`}
                className="dropdown-item"
                style={{ top: `${70 + idx * 50}px`, width: "170px" }}
                onClick={() => setMoreOpen(false)}
              >
                {option}
              </Link>
            ))}
        </div>

        <Link to="/contact" className="contact-link">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <FaBars className="menu-icon-mobile" onClick={() => setOpen(!open)} />
    </nav>
  );
}
