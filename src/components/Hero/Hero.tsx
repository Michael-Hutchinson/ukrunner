import React from 'react';
import { Image, NavLink, ImageBox, Section, Caption, Heading, SubHeading } from './Hero.styles';

function Hero() {
  return (
    <Section>
      <ImageBox>
        <NavLink id="news" to="/news">
          <Image alt="" src="./src/images/homepage/news.png" />
          <Caption>
            <Heading>Latest News</Heading>
            <SubHeading>Keep up to date with my blog</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="about" to="/about">
          <Image alt="" src="./src/images/homepage/about.png" />
          <Caption>
            <Heading>About Me</Heading>
            <SubHeading>Find out about UKRunner.com</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="race" to="/race">
          <Image alt="" src="./src/images/homepage/race.png" />
          <Caption>
            <Heading>Race History</Heading>
            <SubHeading>View all my recent race history and timed results</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="events" to="/events">
          <Image alt="" src="./src/images/homepage/events.png" />
          <Caption>
            <Heading>Events</Heading>
            <SubHeading>View all events that I am currently signed up for</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="training" to="/training">
          <Image alt="" src="./src/images/homepage/training.png" />
          <Caption>
            <Heading>Training Schedule</Heading>
            <SubHeading>View my weekly training schedule</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="shop" to="/shop">
          <Image alt="" src="./src/images/homepage/shop.png" />
          <Caption>
            <Heading>Shop</Heading>
            <SubHeading>View merchandise that I currently have on sale</SubHeading>
          </Caption>
        </NavLink>
      </ImageBox>
    </Section>
  );
}

export default Hero;
