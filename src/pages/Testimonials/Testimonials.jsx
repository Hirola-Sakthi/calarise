import React from "react";
import "./Testimonials.css";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";

const testimonialsData = [
  {
    name: "Arjun Raghavan",
    role: "Home Owner, Bengaluru",
    review:
      "Calarise Interiors transformed our apartment beautifully. The design was elegant, functional, and perfectly aligned with our lifestyle. The team was extremely professional and transparent throughout.",
    rating: "★★★★★",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sneha Iyer",
    role: "Interior Enthusiast, Chennai",
    review:
      "From concept to execution, Calarise Interiors exceeded my expectations. The attention to detail and material quality truly reflect a premium interior brand.",
    rating: "★★★★★",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rahul Mehta",
    role: "Business Owner, Mumbai",
    review:
      "Our office interiors now feel modern, spacious, and inspiring. Calarise Interiors delivered on time and maintained excellent craftsmanship across every element.",
    rating: "★★★★★",
    img: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Ananya Sharma",
    role: "Apartment Owner, Pune",
    review:
      "What stood out was their design clarity and commitment. Calarise Interiors ensured everything was executed exactly as promised, without any last-minute surprises.",
    rating: "★★★★★",
    img: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Vikram Nair",
    role: "Villa Owner, Kochi",
    review:
      "The interiors reflect warmth, elegance, and thoughtful planning. Calarise Interiors brought our vision to life with a perfect balance of aesthetics and comfort.",
    rating: "★★★★★",
    img: "https://images.unsplash.com/photo-1610088441520-4352457e7095?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Pooja Deshpande",
    role: "First-Time Home Buyer, Nagpur",
    review:
      "As a first-time homeowner, I was nervous, but Calarise Interiors made the entire process smooth and stress-free. The final outcome was simply stunning.",
    rating: "★★★★★",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
  },
];


const Testimonials = () => {
  return (
    <>
      <NavbarComponent />

      <section className="our-testimonials-section">
        <div className="our-testimonials-banner">
          <div className="our-testimonials-overlay"></div>
          <div className="our-testimonials-banner-title">
            <span className="allura-font">Testimonials</span>
          </div>
        </div>
        <div className="our-testimonials-content">
          <h2 className="our-testimonials-heading">
            What Our Clients Say
          </h2>
          <p className="our-testimonials-subheading">
            Genuine feedback from people who experienced our work
          </p>

          <div className="our-testimonials-grid">
            {testimonialsData.map((item, index) => (
              <div className="our-testimonials-card" key={index}>
                <div className="our-testimonials-profile">
                  <img src={item.img} alt={item.name} />
                </div>

                <p className="our-testimonials-text">
                  “{item.review}”
                </p>

                <div className="our-testimonials-rating">
                  {item.rating}
                </div>

                <h4 className="our-testimonials-name">
                  {item.name}
                </h4>
                <span className="our-testimonials-role">
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Testimonials;
