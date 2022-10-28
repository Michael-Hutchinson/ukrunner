import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageTitles from '../../constants/PageTitles';

function PageNotFound() {
  return (
    <PageWrapper title={PageTitles.PageNotFound}>
      <h1>PageNotFound</h1>
    </PageWrapper>
  );
}

export default PageNotFound;
