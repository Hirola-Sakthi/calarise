import React, { useState } from "react";
import "./faq.css";
import { FiMinus, FiPlus } from "react-icons/fi";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";

const faqData = [
  {
    q: "What interior design services do you offer?",
    a: "We provide end-to-end interior design solutions, including space planning, concept design, 3D visualizations, material selection, custom furniture design, turnkey execution, and project management for residential and commercial spaces.",
  },
  {
    q: "Do you handle both residential and commercial projects?",
    a: "Yes, we design interiors for homes, apartments, villas, offices, retail spaces, restaurants, and other commercial properties.",
  },
  {
    q: " How much do your interior design services cost?",
    a: "Costs vary depending on project size, scope, materials, and customization. We offer transparent pricing and provide a detailed quotation after understanding your requirements.",
  },
  {
    q: " Do you provide customized designs?",
    a: "Absolutely. Every design is tailored to your lifestyle, preferences, space, and budget to ensure a unique and functional result.",
  },
    {
    q: "Can I see design concepts before execution?",
    a: "Yes, we provide 3D renders and detailed drawings so you can visualize the space and suggest changes before execution begins.",
  },
  {
    q: "Do you help with material selection and sourcing?",
    a: "Yes, we assist with selecting materials, finishes, furniture, lighting, fabrics, and décor, ensuring quality, durability, and aesthetic appeal.",
  },

      {
    q: "Do you offer turnkey interior solutions?",
    a: "Yes, we offer complete turnkey solutions where we handle everything—from design to execution—so you can enjoy a stress-free experience.",
  },
  {
    q: " Do you offer post-project support?",
    a: "Yes, we provide post-completion support to address any concerns after project handover.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <>
    <NavbarComponent/>
    <section className="faq-section">
      <div className="faq-banner">
        <div className="faq-overlay"></div>
        <div className="banner-title">
          <span className="allura-font">FAQ</span>
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-row">
          <div className="faq-left">
            <h3>Have questions?</h3>
            <p>
              We’ve answered the most common ones to help <br />
              you understand our products, services <br />
              and process better.
            </p>

            <img src="/src/assets/images/testimonial-img-1.webp" alt="Interior" />
          </div>
          <div className="faq-right">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item glass ${open === index ? "active" : ""}`}
              >
                <div
                  className="faq-question"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span>{item.q}</span>
                  <span className="icon">
                    {open === index ? <FiMinus /> : <FiPlus />}
                  </span>
                </div>

                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-bottom">
          <img src="/src/assets/images/testimonial-img-2.webp" alt="Living Room" />
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default FAQ;
