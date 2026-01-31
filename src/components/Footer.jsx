import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/images/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-about">
          <img src={Logo} alt="Company Logo" className="footer-logo" />

          <p>
            We design spaces that harmonize style, comfort, and purpose. With a
            focus on creativity, detail, and timeless appeal, our interiors are
            crafted to elevate everyday living while reflecting each client’s
            unique story.
          </p>
        </div>
        <div className="footer-menu">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-right">
          <div className="footer-mail-center">
            <h4 className="footer-call">Mail us</h4>
            <a
              href="mailto:thecalaris.interiors@gmail.com"
              className="email-link"
            >
              thecalaris.interiors@gmail.com
            </a>
          </div>

          <div className="footer-contact-row">
            <div>
              <h4 className="footer-call">Call us</h4>
              <p>
                <a href="tel:+919845921706" className="phone-link">
                  +91 9845921706
                </a>
              </p>
            </div>

            <div>
              <h4 className="footer-call">Follow us</h4>
              <div className="footer-icons">
                <a
                  href="https://www.instagram.com/thecalaris"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/company/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2026 All Rights Reserved</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sales and Refunds</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </footer>
  );
}
