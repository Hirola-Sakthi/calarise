import React from "react";
import { useParams } from "react-router-dom";
import "./Blog.css";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import blogData from "./blogData";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <>
        <NavbarComponent />
        <section className="blog-section">
          <div style={{ padding: "120px", color: "#fff" }}>
            Blog not found
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavbarComponent />

      <section className="blog-section">
        <div className="blog-banner">
          <div className="blog-overlay"></div>
          <div className="banner-title">
            <span className="allura-font">{blog.title}</span>
          </div>
        </div>
        <div className="blog-list">
          <div className="blog-container blog-details-content">
            <span className="blog-date">{blog.date}</span>
            <h1 className="blog-details-title">{blog.title}</h1>
            <div
              className="blog-details-body"
              dangerouslySetInnerHTML={{
                __html: blog.content || "<p>Content coming soon.</p>",
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetails;
