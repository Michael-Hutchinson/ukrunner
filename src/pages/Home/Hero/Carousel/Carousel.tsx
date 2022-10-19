import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

function MobileCarousel() {
  return (
    <Carousel showArrows showThumbs={false} showStatus={false} autoPlay stopOnHover infiniteLoop swipeable>
      <Link id="news" to="/blog">
        <img alt="" src="./src/images/homepage/news.png" />
        <p className="legend">Latest News</p>
      </Link>
      <Link id="about" to="/about">
        <img alt="" src="./src/images/homepage/about.png" />
        <p className="legend">About Me</p>
      </Link>
      <Link id="race" to="/race">
        <img alt="" src="./src/images/homepage/race.png" />
        <p className="legend">Race History</p>
      </Link>
      <Link id="events" to="/events">
        <img alt="" src="./src/images/homepage/events.png" />
        <p className="legend">Events</p>
      </Link>
      <Link id="training" to="/training">
        <img alt="" src="./src/images/homepage/training.png" />
        <p className="legend">Training Schedule</p>
      </Link>
      <Link id="shop" to="/Shop">
        <img alt="" src="./src/images/homepage/Shop.png" />
        <p className="legend">Shop</p>
      </Link>
    </Carousel>
  );
}

export default MobileCarousel;
