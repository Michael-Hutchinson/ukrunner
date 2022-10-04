import React from 'react';
import { Image, ImageBox, Section } from './Hero.styles';

function Hero() {
  return (
    <Section>
      <ImageBox>
        <Image id="news" alt="" src="./src/images/homepage/news.png" />
        <Image id="about" alt="" src="./src/images/homepage/about.png" />
        <Image id="race" alt="" src="./src/images/homepage/race.png" />
        <Image id="events" alt="" src="./src/images/homepage/events.png" />
        <Image id="training" alt="" src="./src/images/homepage/training.png" />
        <Image id="shop" alt="" src="./src/images/homepage/shop.png" />
      </ImageBox>
    </Section>
  );
}

export default Hero;
