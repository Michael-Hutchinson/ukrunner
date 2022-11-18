import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';

function Register() {
  return (
    <PageWrapper title={PageTitles.Register}>
      <Title h1Text="Register" smallText="Create a new account here" />
    </PageWrapper>
  );
}

export default Register;
