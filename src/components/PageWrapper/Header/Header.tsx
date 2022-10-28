import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';

import { IconWrapper, Section, Text } from './Header.styles';

function Header() {
  return (
    <header>
      <Section top>
        <div>
          <Text href="/">HOME</Text>
          <Text href="/about">ABOUT</Text>
          <Text href="/contact">CONTACT</Text>
        </div>
        <IconWrapper>
          <Text icon href="/">
            <FacebookIcon fontSize="small" />
          </Text>
          <Text icon href="/">
            <TwitterIcon fontSize="small" />
          </Text>
          <Text icon href="https://github.com/Michael-Hutchinson">
            <GitHubIcon fontSize="small" />
          </Text>
        </IconWrapper>
      </Section>
      <Section>
        <img src="/src/images/logo.png" alt="uk runner logo" />
      </Section>
    </header>
  );
}

export default Header;
