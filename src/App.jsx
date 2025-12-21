// src/App.jsx
import React, { useEffect, useState } from "react";
import NavbarComponent from "./components/Navbar";
import Banner from "./components/Banner";
import FloatingMenu from "./components/SocialFloating";
import "./App.css"; 
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import TestimonialSection from "./components/TestimonialSection";
import MeetFounder from "./components/MeetFounder";
import AboutUs from "./components/AboutUs";
import SplashCursor from "./components/SplashCursor";
import WhyChooseUs from "./components/WhyChooseUs";
import Loader from "./components/Loader";


function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
    
      <SplashCursor />
      <NavbarComponent />
      <Banner />
      <FloatingMenu />
      <ServicesSection/>
      {/* <AboutUs/> */}
      <WhyChooseUs/>
      <Portfolio/>
      <MeetFounder/>
      <TestimonialSection/>
      <Footer/>
    </>
  );
}

export default App;
