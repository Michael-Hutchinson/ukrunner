import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper/PageWrapper';
import PageTitles from '../../constants/PageTitles';
import Hero from './Hero/Hero';

function Home() {
  return (
    <PageWrapper title={PageTitles.Home}>
      <Hero />
    </PageWrapper>
  );
}

export default Home;
