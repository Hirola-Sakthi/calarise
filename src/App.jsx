// src/App.jsx
import React from "react";
import NavbarComponent from "./components/Navbar";
import Banner from "./components/Banner";
import FloatingMenu from "./components/SocialFloating";
import "./App.css"; // ✅ import once globally
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import TestimonialSection from "./components/TestimonialSection";
import MeetFounder from "./components/MeetFounder";
import AboutUs from "./components/AboutUs";
import SplashCursor from "./components/SplashCursor";


function App() {
  return (
    <>
    
      <SplashCursor />
      <NavbarComponent />
      <Banner />
      <FloatingMenu />
      <ServicesSection/>
      {/* <AboutUs/> */}
      <Portfolio/>
      <MeetFounder/>
      <TestimonialSection/>
      <Footer/>
    </>
  );
}

export default App;
