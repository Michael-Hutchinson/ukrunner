import React, { useState, useEffect } from 'react';
import MobileCarousel from '../shared/Carousel/Carousel';
import ImageGrid from '../shared/ImageGrid/ImageGrid';

function Hero() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  if (width > breakpoint) {
    return <ImageGrid />;
  }
  return <MobileCarousel />;
}

export default Hero;
