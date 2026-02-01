import React, { useState } from "react";
import "./DoMore.css";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DoMore() {
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
    await axios.post("https://calarise.onrender.com/contact", formData);

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
      <NavbarComponent />
      <section class="refer-section">
        <ToastContainer />
        <div className="refer-banner">
          <div className="refer-overlay"></div>
          <div className="banner-title">
            <span className="allura-font">Do More</span>
          </div>
        </div>
        <div class="refer-header">
          <h2 className="allura-font">Refer & Earn</h2>
          <p>
            Ready to bring the allure of Calaris Interiors to your circle?
            Let’s make interior dreams come true, together!
          </p>
        </div>

        <div class="refer-steps">
          <div class="step-card">
            <h4>SPREAD THE WORD</h4>
            <p>
              Let your friends, family, and peers know about Calaris
              Interiors.
            </p>
          </div>

          <span class="arrow">→</span>

          <div class="step-card">
            <h4>REFER FRIENDS/FAMILY</h4>
            <p>Introduce them to the Calaris Interiors magic!</p>
          </div>

          <span class="arrow">→</span>

          <div class="step-card">
            <h4>REFERRAL CONFIRMS</h4>
            <p>Your referral confirms with Calaris Interiors.</p>
          </div>

          <span class="arrow">→</span>

          <div class="step-card">
            <h4>GET REWARDED</h4>
            <p>Unlock exciting rewards once the referral confirms.</p>
          </div>
        </div>

        <div class="refer-image-section">
          <div class="refer-form-wrapper">
            <form class="refer-form" onSubmit={handleSubmit}>
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

              <textarea
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
              ></textarea>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
