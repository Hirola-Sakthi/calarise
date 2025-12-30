import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "./Navbar.css";

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

const moreOptions = ["Blog", "Testimonial", "FAQ", "Refferal"]; const servicesOptions = ["Commerical", "Residency", "Only Design"];

  const moreRef = useRef();
  const servicesRef = useRef();

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
        <a href="#home" className="home-link">Home</a>
        <a href="#about">About Us</a>

        {/* Services Dropdown */}
        <div
          className="more-link"
          ref={servicesRef}
          onClick={() => setServicesOpen(!servicesOpen)}
        >
          Services <FaChevronDown className="down-arrow" />
        </div>
        {servicesOpen &&
  servicesOptions.map((option, idx) => (
    <a
      key={idx}
      href={`#${option.toLowerCase().replace(" ", "")}`}
      className="dropdown-item"
      style={{
        top: `${70 + idx * 50}px`,
        left: "350px",  // <-- move dropdown a bit left
        width: "170px",
        position: "absolute", // ensure it positions correctly
      }}
    >
      {option}
    </a>
  ))}

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
              style={{ top: `${70 + idx * 50}px`, width: "170px" }}
            >
              {option}
            </a>
          ))}

        <a href="#contact" className="contact-link">
          Contact
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <FaBars className="menu-icon-mobile" onClick={() => setOpen(!open)} />
    </nav>
  );
}
