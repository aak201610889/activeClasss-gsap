import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const FlipCard = () => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef();
  const frontRef = useRef();
  const backRef = useRef();

  const toggleCard = () => {
    if (isActive) {
      // Flip back to front
      gsap.to(cardRef.current, {
        duration: 0.6,
        rotationY: 0,
        ease: 'back.out(1.7)'
      });
    } else {
      // Flip to back
      gsap.to(cardRef.current, {
        duration: 0.6,
        rotationY: 180,
        ease: 'back.out(1.7)'
      });
    }
    setIsActive(!isActive);
  };

  return (
    <div className="flip-card-container" onClick={toggleCard}>
      <div 
        ref={cardRef} 
        className={`flip-card ${isActive ? 'active' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div ref={frontRef} className="flip-card-front">
          <h3>Front Side</h3>
          <p>Click to flip</p>
        </div>
        <div ref={backRef} className="flip-card-back">
          <h3>Back Side</h3>
          <p>Click to flip back</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;