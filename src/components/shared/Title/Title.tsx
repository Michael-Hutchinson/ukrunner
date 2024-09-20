import React from 'react';

import { Section, SubHeading } from './Title.styles';

interface ITitleProps {
  h1Text?: string;
  h2Text?: string;
  smallText: string;
}

function Title({ h1Text, h2Text, smallText }: ITitleProps) {
  return (
    <Section>
      {h1Text && <h1>{h1Text}</h1>}
      {h2Text && <h2>{h2Text}</h2>}
      <SubHeading>{smallText}</SubHeading>
    </Section>
  );
}

export default Title;
