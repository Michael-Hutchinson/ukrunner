import React, { useEffect, useState } from 'react';

import MobileCarousel from './Carousel/Carousel';
import ImageGrid from './ImageGrid/ImageGrid';

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
