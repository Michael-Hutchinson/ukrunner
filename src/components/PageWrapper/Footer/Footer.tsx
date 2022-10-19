import React from 'react';
import Title from '../../shared/Title/Title';
import { PageFooter, Bottom, List } from './Footer.styles';

function Footer() {
  return (
    <PageFooter>
      <section>
        <Title h2Text="UK Runner" smallText="A Place for all runners" />
        <img src="./src/images/logo-small.png" alt="uk runner small logo" />
      </section>
      <section>
        <Title h2Text="Useful Links" smallText="Navigate using the links below" />
        <List>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/race">Race History</a>
          </li>
          <li>
            <a href="/training">Training</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </List>
      </section>
      <section>
        <Title h2Text="Socials" smallText="Follow us on Social Media" />
        <List>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/Michael-Hutchinson">Github</a>
          </li>
        </List>
      </section>
      <Bottom>
        <p>Copyright © {new Date().getFullYear()} UK Runner</p>
        <p>
          Website designed & built by <a href="https://www.michaelhutchinson.me">Michael Hutchinson</a>
        </p>
      </Bottom>
    </PageFooter>
  );
}

export default Footer;
