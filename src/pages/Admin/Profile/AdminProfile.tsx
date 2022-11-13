import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import AdminWrapper from '../../../components/AdminWrapper/AdminWrapper';
import FormWrapper from '../../../components/FormWrapper/FormWrapper';
import { ButtonTypes } from '../../../components/shared/Button/Button';
import Icons from '../../../constants/Icons';
import PageTitles from '../../../constants/PageTitles';
import { auth } from '../../../helpers/firebase';
import getUser from '../../../utils/Users.utils';

function AdminProfile() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [firstName, setFirstName] = useState<string>();
  useEffect(() => {
    if (user) {
      getUser(user.uid, setFirstName);
    }
  }, [user]);
  return (
    <AdminWrapper title={PageTitles.Admin} h1Text="Profile Page" smallText="Edit your profile page here">
      <FormWrapper
        icon={Icons.Edit}
        headerText="Edit your profile below"
        onSubmit={(e) => {
          e.preventDefault();
          console.log('edit innit');
        }}
        buttonType={ButtonTypes.submit}
        buttonText="Edit"
        cancelClick={() => {
          navigate('/admin');
        }}
      >
        <>
          {user?.uid}
          {firstName}
        </>
      </FormWrapper>
    </AdminWrapper>
  );
}

export default AdminProfile;
