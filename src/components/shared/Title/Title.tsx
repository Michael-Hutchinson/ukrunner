import React from 'react';
import { Section, SubHeading } from './Title.styles';

interface ITitleProps {
  h2Text: string;
  smallText: string;
}

function Title({ h2Text, smallText }: ITitleProps) {
  return (
    <Section>
      <h2>{h2Text}</h2>
      <SubHeading>{smallText}</SubHeading>
    </Section>
  );
}

export default Title;
