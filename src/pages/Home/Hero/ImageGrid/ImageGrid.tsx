import React from 'react';

import About from '../../../../images/homepage/about.png';
import Contact from '../../../../images/homepage/contact.png';
import News from '../../../../images/homepage/news.png';
import Training from '../../../../images/homepage/training.png';
import { Caption, Heading, Image, ImageBox, NavLink, Section, SubHeading } from './ImageGrid.styles';

function ImageGrid() {
  return (
    <Section>
      <ImageBox>
        <NavLink id="news" to="/blog">
          <Image alt="news" src={News} />
          <Caption>
            <Heading>Latest News</Heading>
            <SubHeading>Keep up to date with my blog</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="about" to="/about">
          <Image alt="about" src={About} />
          <Caption>
            <Heading>About Me</Heading>
            <SubHeading>Find out about UKRunner.com</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="training" to="/training">
          <Image alt="training" src={Training} />
          <Caption>
            <Heading>Training Schedule</Heading>
            <SubHeading>View my weekly training schedule</SubHeading>
          </Caption>
        </NavLink>
        <NavLink id="contact" to="/contact">
          <Image alt="contact" src={Contact} />
          <Caption>
            <Heading>Contact me</Heading>
            <SubHeading>Contact me using the form on this page</SubHeading>
          </Caption>
        </NavLink>
      </ImageBox>
    </Section>
  );
}

export default ImageGrid;
