import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/images/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* Left Text */}
        {/* Left Text */}
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
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Gallery</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-right">
          <div className="footer-mail-center">
            <h4 className="footer-call">Mail us</h4>
            <a href="mailto:thecalaris.interiors@gmail.com" className="email-link">
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
