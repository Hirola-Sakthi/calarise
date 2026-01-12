import React from "react";
import SplashCursor from "../../components/SplashCursor";
import Banner from "../../components/Banner";
import FloatingMenu from "../../components/SocialFloating";
import ServicesSection from "../../components/ServicesSection";
import AboutUs from "../../components/AboutUs";
import ProcessSection from "../../components/ProcessSection";
import Portfolio from "../../components/Portfolio";
import MeetFounder from "../../components/MeetFounder";
import TestimonialSection from "../../components/TestimonialSection";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <>
    <NavbarComponent/>
      <SplashCursor />
      <Banner />
      <FloatingMenu />
      <ServicesSection />
      <AboutUs />
      <ProcessSection />
      <Portfolio />
      <MeetFounder />
      <TestimonialSection />
      <Footer/>
    </>
  );
}
