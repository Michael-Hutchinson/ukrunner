import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';
import AdminWrapper from '../../components/AdminWrapper/AdminWrapper';

function Admin() {
  return (
    <PageWrapper title={PageTitles.Admin}>
      <>
        <Title
          h1Text="Admin Control Panel"
          smallText="This is the admin control panel all website tasks can be completed here"
        />
        <AdminWrapper>
          <>
            <h2>Welcome to the admin panel</h2>
            <h3>Please use the navigation on the left hand side for the functions you require</h3>
          </>
        </AdminWrapper>
      </>
    </PageWrapper>
  );
}

export default Admin;
