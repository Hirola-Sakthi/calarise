import React from "react";
import "./DoMore.css";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DoMore() {
  return (
    <>
    <NavbarComponent/>
      <section class="refer-section">
              <div className="refer-banner">
        <div className="refer-overlay"></div>
        <div className="banner-title">
          <span className="allura-font">Do More</span>
        </div>
      </div>
        <div class="refer-header">
          <h2 className="allura-font">Refer & Earn</h2>
          <p>
            Ready to bring the allure of Alpha Modular Interiors to your circle?
            Let’s make interior dreams come true, together!
          </p>
        </div>

        <div class="refer-steps">
          <div class="step-card">
            <h4>SPREAD THE WORD</h4>
            <p>
              Let your friends, family, and peers know about Alpha Modular
              Interiors.
            </p>
          </div>

          <span class="arrow">→</span>

          <div class="step-card">
            <h4>REFER FRIENDS/FAMILY</h4>
            <p>Introduce them to the Alpha Modular Interiors magic!</p>
          </div>

          <span class="arrow">→</span>

          <div class="step-card">
            <h4>REFERRAL CONFIRMS</h4>
            <p>Your referral confirms with Alpha Modular Interiors.</p>
          </div>

          <span class="arrow">→</span>

          <div class="step-card">
            <h4>GET REWARDED</h4>
            <p>Unlock exciting rewards once the referral confirms.</p>
          </div>
        </div>

        <div class="refer-image-section">
          <div class="refer-form">
            <input type="text" placeholder="First Name *" />
            <input type="text" placeholder="Last Name" />
            <input type="tel" placeholder="Phone Number *" />
            <input type="email" placeholder="Email *" />
            <input type="text" placeholder="Name of Friend / Family" />
            <button>SUBMIT</button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
