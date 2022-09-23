import React from 'react';
import { Facebook, Twitter, Github } from '@styled-icons/boxicons-logos';
import { Section, Text } from './Header.styles';

function Header() {
  return (
    <header>
      <Section top>
        <div>
          <Text href="/">HOME</Text>
          <Text href="/">ABOUT</Text>
          <Text href="/">CONTACT</Text>
        </div>
        <div>
          <Facebook size="48" title="Facebook" />
          <Twitter size="48" title="Twitter" />
          <Github size="48" title="Github" />
        </div>
      </Section>
      <Section>
        <img src="./src/images/logo.png" alt="uk runner logo" />
      </Section>
    </header>
  );
}

export default Header;
