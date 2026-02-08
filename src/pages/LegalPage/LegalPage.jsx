import React from "react";
import { useLocation } from "react-router-dom";
import "./LegalPage.css";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import legalContent from "./LegalPage.json";

const LegalPage = () => {
  const location = useLocation();

  const type =
    location.pathname === "/terms-of-use"
      ? "termsAndConditions"
      : "privacyPolicy";

  const data = legalContent[type];

  return (
    <>
      <NavbarComponent />
      <section className="legal-page-section">
        <div className="legal-page-banner">
          <div className="legal-page-overlay" />
          <div className="banner-title">
            <span className="allura-font">{data.title}</span>
          </div>
        </div>
        <div className="legal-content-container">
          <p className="legal-updated">
            Last updated: {data.lastUpdated}
          </p>
          {data.intro?.map((text, index) => (
            <p key={index} className="legal-intro">
              {text}
            </p>
          ))}
          {data.sections.map((section, index) => (
            <div key={index} className="legal-section">
              <h3>
                {section.number && `${section.number}. `}
                {section.heading}
              </h3>

              {typeof section.content === "string" && (
                <p>{section.content}</p>
              )}

              {Array.isArray(section.content) &&
                section.content.map((p, i) => <p key={i}>{p}</p>)}

              {section.points && (
                <ul>
                  {section.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}

              {section.subSections?.map((sub, i) => (
                <div key={i} className="legal-subsection">
                  <h4>{sub.title}</h4>
                  {sub.description && <p>{sub.description}</p>}
                  {sub.points && (
                    <ul>
                      {sub.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {section.note && (
                <p className="legal-note">{section.note}</p>
              )}

              {section.contact && (
                <div className="legal-contact">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${section.contact.email}`}>
                      {section.contact.email}
                    </a>
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a
                      href={section.contact.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {section.contact.website}
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LegalPage;
