import React from "react";
import "./Blog.css";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import blogData from "./blogData";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <NavbarComponent />

      <section className="blog-section">
      <div className="blog-banner">
        <div className="blog-overlay"></div>
        <div className="banner-title">
          <span className="allura-font">Blogs</span>
        </div>
      </div>
        <div className="blog-list">
          <div className="blog-container">
            <div className="blog-grid">
              {blogData.map((blog, index) => (
                <div className="blog-card" key={index}>
                  <div className="blog-image">
                    <img src={blog.image} alt={blog.title} />
                  </div>

                  <div className="blog-content">
                    <span className="blog-date">{blog.date}</span>
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-description">
                      {blog.description}
                    </p>

                    <a
                      href={`/blog/${blog.slug}`}
                      className="blog-read-more"
                    >
                      Read More <FaArrowRight  style={{ fontSize: "12px" }}/>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
