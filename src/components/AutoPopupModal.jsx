import React, { useEffect, useState } from "react";
import "./AutoPopupModal.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AutoPopupModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;

    const startTimer = () => {
      timer = setTimeout(() => {
        setShow(true);
      }, 30000);
    };

    startTimer();

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 30000);
  };

  if (!show) return null;

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
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-overlay">
      <ToastContainer />
      <div className="popup-modal">
        <button className="popup-close" onClick={handleClose}>
          ×
        </button>

        <h3>Enquire now</h3>

        <form onSubmit={handleSubmit}>
          <div className="popup-row">
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
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
          ></textarea>

          <button type="submit" disabled={loading} className="popup-submit">
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AutoPopupModal;
