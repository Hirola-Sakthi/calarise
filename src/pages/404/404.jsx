// src/pages/NotFound/NotFound.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #000000, #1a1a1a)",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "60px 40px",
          textAlign: "center",
          color: "#fff",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          animation: "float 4s ease-in-out infinite",
          maxWidth: "420px",
          width: "90%",
        }}
      >
        <h1
        className="allura-font"
          style={{
            fontSize: "96px",
            fontWeight: "700",
            marginBottom: "5px",
            letterSpacing: "6px",
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "26px",
            marginBottom: "30px",
          }}
          className="allura-font"
        >
          Page Not Found
        </h2>

        <Link
          to="/"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            display: "inline-block",
            padding: "12px 26px",
            borderRadius: "8px",
            border: "1px solid #fff",
            color: hover ? "#000" : "#fff",
            background: hover ? "#fff" : "transparent",
            textDecoration: "none",
            fontSize: "14px",
            transition: "all 0.3s ease",
            transform: hover ? "translateY(-2px)" : "translateY(0)",
            boxShadow: hover
              ? "0 10px 25px rgba(255,255,255,0.3)"
              : "none",
          }}
        >
          Go back to Home
        </Link>
      </div>
      
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
