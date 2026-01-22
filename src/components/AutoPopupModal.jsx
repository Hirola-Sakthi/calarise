import React, { useEffect, useState } from "react";
import "./AutoPopupModal.css";
import emailjs from "@emailjs/browser";
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
      }, 60000);
    };

    startTimer();

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 60000);
  };

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_uizmkco",
        "template_08inae1",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "0Nu9qGlYuCwwT9Ywn",
      )

      .then(() => {
        return emailjs.send(
          "service_uizmkco",
          "template_70ecmbb",
          {
            user_name: `${formData.firstName} ${formData.lastName}`,
            user_email: formData.email,
            title: "Contact Request",
          },
          "0Nu9qGlYuCwwT9Ywn",
        );
      })

      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setShow(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      })

      .catch((err) => {
        console.error("EmailJS Error:", err);

        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
        setShow(false);
      })

      .finally(() => setLoading(false));
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
