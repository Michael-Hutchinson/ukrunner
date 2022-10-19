import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper/PageWrapper';
import PageTitles from '../../constants/PageTitles';

function About() {
  return (
    <PageWrapper title={PageTitles.About}>
      <h1>About</h1>
    </PageWrapper>
  );
}

export default About;
