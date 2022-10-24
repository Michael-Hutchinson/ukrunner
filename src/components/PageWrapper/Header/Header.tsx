import React from 'react';
import { Facebook, Twitter, Github } from '@styled-icons/boxicons-logos';
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
          <Text href="/">
            <Facebook size="15" title="Facebook" />
          </Text>
          <Text href="/">
            <Twitter size="15" title="Twitter" />
          </Text>
          <Text href="https://github.com/Michael-Hutchinson">
            <Github size="15" title="Github" />
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
