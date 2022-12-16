import EngineeringIcon from '@mui/icons-material/Engineering';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../images/logo-small.png';
import Title from '../../shared/Title/Title';
import { Bottom, Icon, List, PageFooter } from './Footer.styles';

function Footer() {
  return (
    <PageFooter>
      <section>
        <Title h2Text="UK Runner" smallText="A Place for all runners" />
        <img src={Logo} alt="uk runner small logo" />
      </section>
      <section>
        <Title h2Text="Useful Links" smallText="Navigate using the links below" />
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/training">Training</Link>
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
          <Icon to="/login">
            <EngineeringIcon fontSize="small" />
          </Icon>
        </p>
      </Bottom>
    </PageFooter>
  );
}

export default Footer;
