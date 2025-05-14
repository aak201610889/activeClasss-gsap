import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
function ActiveButton() {
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef();
// todo: make multi buttons
  useEffect(() => {
    isActive
      ? gsap.to(buttonRef.current, {
          duration: 0.3,
          backgroundColor: "#4a6bff",
          color: "white",
          scale: 1.5,
          ease: "power2.out",
        })
      : gsap.to(buttonRef.current, {
          duration: 0.3,
          backgroundColor: "#f0f0f0",
          color: "#333",
          scale: 1,
          ease: "power2.out",
        });
  }, [isActive]);

  return (
    <div>
      <button ref={buttonRef} className={`${isActive ? "active" : ""}`} onClick={()=>setIsActive((prev)=>!prev)}>
        {isActive ? "active" : "not active"}
      </button>
    </div>
  );
}

export default ActiveButton;
