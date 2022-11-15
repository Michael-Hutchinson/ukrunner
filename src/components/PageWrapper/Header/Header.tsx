import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';

import Logo from '../../../images/logo.png';
import { IconWrapper, LinkText, Section, Text } from './Header.styles';

function Header() {
  return (
    <header>
      <Section top>
        <div>
          <Text to="/">HOME</Text>
          <Text to="/about">ABOUT</Text>
          <Text to="/contact">CONTACT</Text>
        </div>
        <IconWrapper>
          <LinkText icon href="/">
            <FacebookIcon fontSize="small" />
          </LinkText>
          <LinkText icon href="/">
            <TwitterIcon fontSize="small" />
          </LinkText>
          <LinkText icon href="https://github.com/Michael-Hutchinson">
            <GitHubIcon fontSize="small" />
          </LinkText>
        </IconWrapper>
      </Section>
      <Section>
        <img src={Logo} alt="uk runner logo" />
      </Section>
    </header>
  );
}

export default Header;
