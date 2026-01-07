import React from "react";
import "./ProcessSection.css";


import thinkingIcon from "../assets/images/thinking-icon.png";
import handshakeIcon from "../assets/images/hand-shake-icon.png";
import factoryIcon from "../assets/images/factory-icon.png";
import deliveryIcon from "../assets/images/delivery-icon.png";
import toolsIcon from "../assets/images/tools-icon.png";
import keysIcon from "../assets/images/keys-icon.png";

const processData = [
  {
    title: "Speak to our design consultant\n& get estimate",
    icon: thinkingIcon,
  },
  {
    title: "Detailed drawing & approval",
    icon: handshakeIcon,
  },
  {
    title: "Production at factory",
    icon: factoryIcon,
  },
  {
    title: "Material delivery within\n20 working days\nAfter design phase",
    icon: deliveryIcon,
  },
  {
    title: "Installation at site",
    icon: toolsIcon,
  },
  {
    title: "On-time project handover",
    icon: keysIcon,
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="process-grid">
        {processData.map((item, index) => (
          <div className="process-item" key={index}>
            <div className="process-icon">
              <img src={item.icon} alt="process icon" />
            </div>

            <p className="process-text">
              {item.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
