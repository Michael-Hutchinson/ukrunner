import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper/PageWrapper';
import PageTitles from '../../constants/PageTitles';

function Blog() {
  return (
    <PageWrapper title={PageTitles.Blog}>
      <h1>Blog</h1>
    </PageWrapper>
  );
}

export default Blog;
