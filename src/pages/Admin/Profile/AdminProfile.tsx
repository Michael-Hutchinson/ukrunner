import TextField from '@mui/material/TextField';
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
  const [surname, setSurname] = useState<string>();
  const [fileName, setFileName] = useState<string>();
  const [profilePicture, setProfilePicture] = useState<string>();
  const [bio, setBio] = useState<string>();
  useEffect(() => {
    if (user) {
      getUser(user.uid, setFirstName, setSurname, setProfilePicture, setFileName, setBio);
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
          <TextField
            margin="normal"
            required
            fullWidth
            id="first name"
            label="First Name"
            name="first name"
            type="text"
            autoComplete="name"
            value={firstName || ''}
            defaultValue={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="last name"
            label="Last Name"
            name="last name"
            type="text"
            autoComplete="name"
            value={surname || ''}
            defaultValue={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />
          <img alt={fileName} src={profilePicture} />
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            id="bio"
            label="Bio"
            name="bio"
            type="text"
            autoComplete="bio"
            value={bio || ''}
            defaultValue={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </>
      </FormWrapper>
    </AdminWrapper>
  );
}

export default AdminProfile;
