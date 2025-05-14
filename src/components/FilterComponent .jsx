import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const FilterComponent = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const itemsRef = useRef([]);
  const filters = ['all', 'design', 'development', 'marketing'];
  const portfolioItems = [
    { id: 1, category: 'design', title: 'Design Project 1' },
    { id: 2, category: 'development', title: 'Dev Project 1' },
    { id: 3, category: 'marketing', title: 'Marketing Project 1' },
    { id: 4, category: 'design', title: 'Design Project 2' },
    { id: 5, category: 'development', title: 'Dev Project 2' }
  ];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    
    portfolioItems.forEach((item, index) => {
      const shouldShow = filter === 'all' || item.category === filter;
      const element = itemsRef.current[index];
      
      if (shouldShow) {
        // Show animation
        gsap.to(element, {
          duration: 0.4,
          opacity: 1,
          scale: 1,
          display: 'block',
          ease: 'power2.out',
          delay: index * 0.05
        });
      } else {
        // Hide animation
        gsap.to(element, {
          duration: 0.3,
          opacity: 0,
          scale: 0.8,
          display: 'none',
          ease: 'power2.in'
        });
      }
    });
  };

  return (
    <div className="filter-component">
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => handleFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            ref={el => itemsRef.current[index] = el}
            className={`portfolio-item ${item.category}`}
          >
            <h3>{item.title}</h3>
            <span>{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;