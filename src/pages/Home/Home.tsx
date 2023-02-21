import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageTitles from '../../constants/PageTitles';
import About from './About/About';
import Blog from './Blog/Blog';
import Hero from './Hero/Hero';
import RecentActivities from './RecentActivities/RecentActivities';

function Home() {
  return (
    <PageWrapper title={PageTitles.Home}>
      <>
        <Hero />
        <About />
        <RecentActivities />
        <Blog />
      </>
    </PageWrapper>
  );
}

export default Home;
