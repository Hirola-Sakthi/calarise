import React from "react";
import Banner from "../../components/Banner";
import ServicesSection from "../../components/ServicesSection";
import AboutUs from "../../components/AboutUs";
import ProcessSection from "../../components/ProcessSection";
import Portfolio from "../../components/Portfolio";
import MeetFounder from "../../components/MeetFounder";
import TestimonialSection from "../../components/TestimonialSection";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import AutoPopupModal from "../../components/AutoPopupModal";



export default function Home() {
  return (
    <>
    <NavbarComponent/>
      <Banner />
      <ServicesSection />
      <AboutUs />
      <ProcessSection />
      <Portfolio />
      <MeetFounder />
      <TestimonialSection />
      <Footer/>
      {/* <AutoPopupModal/> */}
    </>
  );
}
