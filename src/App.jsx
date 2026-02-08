import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/Faq/Faq";
import NotFound from "./pages/404/404";
import DoMore from "./pages/DoMore/DoMore";
import SplashCursor from "./components/SplashCursor";
import FloatingMenu from "./components/SocialFloating";
import Residential from "./pages/Residential/Residential";
import AboutPage from "./pages/AboutPage/AboutPage";
import Testimonials from "./pages/Testimonials/Testimonials";
import Blog from "./pages/Blog/Blog";
import PageScrollToTop from "./pages/PageScrollToTop/PageScrollToTop";
import BlogDetails from "./pages/Blog/BlogDetails";
import BottomNav from "./components/BottomNav";
import LegalPage from "./pages/LegalPage/LegalPage";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
    <PageScrollToTop />
      <SplashCursor />
      <FloatingMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/do-more" element={<DoMore />} />
        <Route path="/services" element={<Residential />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/privacy-policy" element={<LegalPage type="privacyPolicy" />} />
        <Route path="/terms-of-use" element={<LegalPage type="termsAndConditions" />} />



        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
