// Slider.jsx
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
const slides = [
  { id: 1, content: "Slide 1", bg: "#f87171" },
  { id: 2, content: "Slide 2", bg: "#60a5fa" },
  { id: 3, content: "Slide 3", bg: "#34d399" },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRefs = useRef([]);

  useEffect(() => {
    console.log(slideRefs.current[activeIndex]);
    if (activeIndex == 1) {
      gsap.fromTo(
        slideRefs.current[activeIndex],
        { autoAlpha: 0, x: 0, y: 100 },
        { autoAlpha: 1, x: 0, y: 0, duration: 0.8, ease: "power3.out" }
      );
    } else {
      gsap.fromTo(
        slideRefs.current[activeIndex],
        { autoAlpha: 0, x: 100 },
        { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [activeIndex]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>


      <div className="slider-container flex flex-col">
        <button onClick={goToPrev} className="nav-btn">
          ⟨
        </button>
        <div className="slider-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              ref={(el) => (slideRefs.current[index] = el)}
              className={`slide ${activeIndex === index ? "active" : ""}`}
              style={{ backgroundColor: slide.bg }}
            >
              {slide.content}
            </div>
          ))}
        </div>
        <button onClick={goToNext} className="nav-btn">
          ⟩
        </button>
      </div>


    </>
  );
}
