import React from 'react';

import About from '../../../../images/homepage/about.png';
import Events from '../../../../images/homepage/events.png';
import News from '../../../../images/homepage/news.png';
import Race from '../../../../images/homepage/race.png';
import Shop from '../../../../images/homepage/shop.png';
import Training from '../../../../images/homepage/training.png';
import { Caption, Heading, Image, ImageBox, NavLink, Section, SubHeading } from './ImageGrid.styles';

function ImageGrid() {
  return (
    <Section>
      <ImageBox>
        <NavLink id="news" to="/blog">
          <Image alt="" src={News} />
          <Caption>
            <Heading>Latest News</Heading>
            <SubHeading>Keep up to date with my blog</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="about" to="/about">
          <Image alt="" src={About} />
          <Caption>
            <Heading>About Me</Heading>
            <SubHeading>Find out about UKRunner.com</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="race" to="/race">
          <Image alt="" src={Race} />
          <Caption>
            <Heading>Race History</Heading>
            <SubHeading>View all my recent race history and timed results</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="events" to="/events">
          <Image alt="" src={Events} />
          <Caption>
            <Heading>Events</Heading>
            <SubHeading>View all events that I am currently signed up for</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="training" to="/training">
          <Image alt="" src={Training} />
          <Caption>
            <Heading>Training Schedule</Heading>
            <SubHeading>View my weekly training schedule</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="shop" to="/shop">
          <Image alt="" src={Shop} />
          <Caption>
            <Heading>Shop</Heading>
            <SubHeading>View merchandise that I currently have on sale</SubHeading>
          </Caption>
        </NavLink>
      </ImageBox>
    </Section>
  );
}

export default ImageGrid;
