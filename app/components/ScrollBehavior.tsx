"use client";

import { useEffect } from 'react';

export default function ScrollBehavior() {
  useEffect(() => {
    // Enhanced smooth scroll behavior for mobile devices
    // Force enable smooth scrolling across the site
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Enable momentum scrolling on mobile devices
    const handleTouchStart = () => {
      // Touch start handler - keep this for better touch performance
    };
    
    const handleTouchEnd = () => {
      // Touch end handler - keep this for better touch performance
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
