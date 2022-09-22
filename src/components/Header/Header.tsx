import React from 'react';
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
          <Text href="/">Facebook</Text>
          <Text href="/">Twitter</Text>
          <Text href="/">Github</Text>
        </div>
      </Section>
      <Section>
        <img src="./src/images/logo.png" alt="uk runner logo" />
      </Section>
    </header>
  );
}

export default Header;
