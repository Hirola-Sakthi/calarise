import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/Faq/Faq";
import NotFound from "./pages/404/404";
import DoMore from "./pages/DoMore/DoMore";
import SplashCursor from "./components/SplashCursor";
import FloatingMenu from "./components/SocialFloating";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <SplashCursor />
      <FloatingMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about-us" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/do-more" element={<DoMore />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
