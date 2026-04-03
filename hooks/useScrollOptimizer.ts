'use client';

import { useEffect, useRef } from 'react';

/**
 * useScrollOptimizer
 * Optimizes scroll-based events by using requestAnimationFrame (rAF)
 * to avoid layout thrashing and ensure 60fps scrolling.
 */
export const useScrollOptimizer = (onScroll?: (scrollTop: number) => void) => {
  const requestRef = useRef<number>(0);
  const previousScrollTop = useRef<number>(0);

  const animate = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop !== previousScrollTop.current) {
      if (onScroll) {
        onScroll(scrollTop);
      }
      previousScrollTop.current = scrollTop;
    }
    
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start rAF loop for high-performance scroll tracking
    requestRef.current = requestAnimationFrame(animate);
    
    // Ensure all native event listeners are passive
    const handleScroll = () => {
      // Passive handler (optional additional logic)
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScroll]);

  return { scrollTop: previousScrollTop.current };
};
