import React from 'react';
import { Link } from 'react-router-dom';
import { Cog } from '@styled-icons/boxicons-regular';
import Title from '../../shared/Title/Title';
import { PageFooter, Bottom, List } from './Footer.styles';

function Footer() {
  return (
    <PageFooter>
      <section>
        <Title h2Text="UK Runner" smallText="A Place for all runners" />
        <img src="/src/images/logo-small.png" alt="uk runner small logo" />
      </section>
      <section>
        <Title h2Text="Useful Links" smallText="Navigate using the links below" />
        <List>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/race">Race History</Link>
          </li>
          <li>
            <Link to="/training">Training</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
          Website designed & built by <a href="https://www.michaelhutchinson.me">Michael Hutchinson</a> |{' '}
          <Link to="/login">
            <Cog size="20" title="Cog" />
          </Link>
        </p>
      </Bottom>
    </PageFooter>
  );
}

export default Footer;
