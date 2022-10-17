import React from 'react';
import { Image, NavLink, ImageBox, Section } from './Hero.styles';

function Hero() {
  return (
    <Section>
      <ImageBox>
        <NavLink id="news" to="/news">
          <Image alt="" src="./src/images/homepage/news.png" />
        </NavLink>
        <NavLink id="about" to="/about">
          <Image alt="" src="./src/images/homepage/about.png" />
        </NavLink>
        <NavLink id="race" to="/race">
          <Image alt="" src="./src/images/homepage/race.png" />
        </NavLink>
        <NavLink id="events" to="/events">
          <Image alt="" src="./src/images/homepage/events.png" />
        </NavLink>
        <NavLink id="training" to="/training">
          <Image alt="" src="./src/images/homepage/training.png" />
        </NavLink>
        <NavLink id="shop" to="/shop">
          <Image alt="" src="./src/images/homepage/shop.png" />
        </NavLink>
      </ImageBox>
    </Section>
  );
}

export default Hero;
