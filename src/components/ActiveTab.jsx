import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function ActiveTab() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);

  const tabs = ["Home", "Products", "About", "Contact"];

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      gsap.to(".underline", {
        x: tabRefs.current[activeTab].offsetLeft,
        width: tabRefs.current[activeTab].offsetWidth,
        backgroundColor: "#f00",
        duration: 0.3,
      });
    }
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {tabs.map((item, index) => (
        <button
          key={index}
          ref={(el) => (tabRefs.current[index] = el)}
          onClick={() => handleTabClick(index)}
          style={{
            padding: "10px 20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontWeight: activeTab === index ? "bold" : "normal",
          }}
        >
          {item}
        </button>
      ))}
      <div
        className="underline"
        style={{
          position: "absolute",
          height: "2px",
          bottom: 0,
          left: 0,
          backgroundColor: "#f00",
          width: "0px",
        }}
      />
    </div>
  );
}

export default ActiveTab;
