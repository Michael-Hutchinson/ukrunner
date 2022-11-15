import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import About from '../../../../images/homepage/about.png';
import Events from '../../../../images/homepage/events.png';
import News from '../../../../images/homepage/news.png';
import Race from '../../../../images/homepage/race.png';
import Shop from '../../../../images/homepage/shop.png';
import Training from '../../../../images/homepage/training.png';
import Section from './Carousel.styles';

function MobileCarousel() {
  return (
    <Section>
      <Carousel showArrows showThumbs={false} showStatus={false} autoPlay stopOnHover infiniteLoop swipeable>
        <Link id="news" to="/blog">
          <img alt="" src={News} />
          <p className="legend">Latest News</p>
        </Link>
        <Link id="about" to="/about">
          <img alt="" src={About} />
          <p className="legend">About Me</p>
        </Link>
        <Link id="race" to="/race">
          <img alt="" src={Race} />
          <p className="legend">Race History</p>
        </Link>
        <Link id="events" to="/events">
          <img alt="" src={Events} />
          <p className="legend">Events</p>
        </Link>
        <Link id="training" to="/training">
          <img alt="" src={Training} />
          <p className="legend">Training Schedule</p>
        </Link>
        <Link id="shop" to="/Shop">
          <img alt="" src={Shop} />
          <p className="legend">Shop</p>
        </Link>
      </Carousel>
    </Section>
  );
}

export default MobileCarousel;
