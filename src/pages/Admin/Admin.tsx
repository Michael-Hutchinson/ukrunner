import { signOut } from 'firebase/auth';
import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper/PageWrapper';
import Button from '../../components/shared/Button/Button';
import PageTitles from '../../constants/PageTitles';
import { auth } from '../../helpers/firebase';

function Admin() {
  return (
    <PageWrapper title={PageTitles.Admin}>
      <>
        <h1>Admin</h1>
        <Button onClick={() => signOut(auth)} buttonType="button" buttonText="Logout" />
      </>
    </PageWrapper>
  );
}

export default Admin;
