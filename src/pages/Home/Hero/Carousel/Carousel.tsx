import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import About from '../../../../images/homepage/about.png';
import Contact from '../../../../images/homepage/contact.png';
import News from '../../../../images/homepage/news.png';
import Training from '../../../../images/homepage/training.png';
import Section from './Carousel.styles';

function MobileCarousel() {
  return (
    <Section>
      <Carousel showArrows showThumbs={false} showStatus={false} autoPlay stopOnHover infiniteLoop swipeable>
        <Link id="news" to="/blog">
          <img alt="news" src={News} />
          <p className="legend">Latest News</p>
        </Link>
        <Link id="about" to="/about">
          <img alt="about" src={About} />
          <p className="legend">About Me</p>
        </Link>
        <Link id="training" to="/training">
          <img alt="training" src={Training} />
          <p className="legend">Training Schedule</p>
        </Link>
        <Link id="contact" to="/contact">
          <img alt="contact" src={Contact} />
          <p className="legend">Contact Me</p>
        </Link>
      </Carousel>
    </Section>
  );
}

export default MobileCarousel;
