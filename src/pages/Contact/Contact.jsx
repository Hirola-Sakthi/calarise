import React, { useState } from "react";
import "./Contact.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await axios.post("https://calaris.onrender.com/contact", formData);

    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (error) {
    toast.error("Failed to send message. Please try again.", {
      position: "top-right",
      autoClose: 3000,
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <>
    <NavbarComponent/>
    <section className="contact-section">
      <ToastContainer />
      <div className="contact-banner">
        <div className="contact-overlay"></div>
        <div className="banner-title">
          <span className="allura-font">Contact Us</span>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-form">
            <h4>Get in touch</h4>
            <p>We are here to help! How can we assist you?</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <div className="button-wrapper">
                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          <div className="contact-map">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=13.0712654,77.6199163&z=15&output=embed"
              loading="lazy"
            />

            <div className="contact-bottom">
              <div className="call-us">
                <p>Call us</p>
                <h5>
                  <a href="tel:+919845921706">+91 98459 21706</a>
                </h5>
              </div>

              <div className="socials">
                <span>Follow us</span>
                <div className="icons">
                  <FaInstagram />
                  <FaFacebookF />
                  <FaLinkedinIn />
                  <FaXTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;
