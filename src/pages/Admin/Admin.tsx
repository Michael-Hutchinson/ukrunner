import React from 'react';

import AdminWrapper from '../../components/AdminWrapper/AdminWrapper';
import PageTitles from '../../constants/PageTitles';

function Admin() {
  return (
    <AdminWrapper
      title={PageTitles.Admin}
      h1Text="Admin Control Panel"
      smallText="This is the admin control panel all website tasks can be completed here"
    >
      <>
        <h2>Welcome to the admin panel</h2>
        <h3>Please use the navigation on the left hand side for the functions you require</h3>
      </>
    </AdminWrapper>
  );
}

export default Admin;
