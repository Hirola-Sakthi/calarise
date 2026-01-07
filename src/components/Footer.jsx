import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/images/logo.png"; // adjust path if needed
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

        {/* Middle Menu */}
        <div className="footer-menu">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Gallery</a>
          <a href="#">Contact Us</a>
        </div>

        {/* Newsletter / Contact */}
        <div className="footer-right">
          <p className="footer-title">
            Subscribe to stay tuned for new web design and latest updates. Let’s
            do it!
          </p>

          <div className="footer-subscribe">
            <input type="email" placeholder="Enter your email Address" />
            <button>Subscribe</button>
          </div>

          <div className="footer-contact-row">
            <div>
              <h4 className="footer-call">Call us</h4>
              <p>+1 800 854-36-80</p>
            </div>

            <div>
              <h4 className="footer-call">Follow us</h4>
              <div className="footer-icons">
                <a
                  href="https://www.instagram.com/thecalaris?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.linkedin.com/company/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter (X)"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2021 All Rights Reserved</p>
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
