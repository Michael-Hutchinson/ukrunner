import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button, { ButtonTypes } from '../../../components/shared/Button/Button';
import Title from '../../../components/shared/Title/Title';
import { Section, Text } from './About.styles';

function About() {
  const navigate = useNavigate();
  return (
    <Section>
      <div>
        <Title h2Text="UK Runner" smallText="Who is behind UK Runner?" />
        <Text>UK Runner is a brand built on the idea that there is no right way to do something</Text>
        <Text>This reflects alot with Running everyone has to start somewhere</Text>
        <Text>This website documents my running journey as everyones journey is different.</Text>
        <Button buttonType={ButtonTypes.button} buttonText="Learn More" onClick={() => navigate('/about')} />
      </div>
      <div>
        <Title h2Text="Strava" smallText="Follow me on strava" />
      </div>
    </Section>
  );
}

export default About;
