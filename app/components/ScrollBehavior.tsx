"use client";

import { useEffect } from 'react';

export default function ScrollBehavior() {
  useEffect(() => {
    // Enhanced smooth scroll behavior for mobile devices
    // Force enable smooth scrolling across the site
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle touch events for mobile
    let touchStartY = 0;
    let touchEndY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].screenY;
      // Add any custom scroll behavior if needed
    };
    
    // Add event listeners with passive option for better performance
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Cleanup function
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
  
  // This component doesn't render anything
  return null;
}
