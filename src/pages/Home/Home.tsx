import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageTitles from '../../constants/PageTitles';
import About from './About/About';
import Hero from './Hero/Hero';

function Home() {
  return (
    <PageWrapper title={PageTitles.Home}>
      <>
        <Hero />
        <About />
      </>
    </PageWrapper>
  );
}

export default Home;
