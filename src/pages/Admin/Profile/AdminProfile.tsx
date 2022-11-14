import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
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
import { editUser, getUser } from '../../../utils/Users.utils';
import ProfileImg from './AdminProfile.styles';

function AdminProfile() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [firstName, setFirstName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [file, setFile] = useState<File>();
  const [fileName, setFileName] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
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
          if (user) {
            editUser({
              userID: user.uid,
              firstName,
              surname,
              bio,
              file,
              fileName: `users/${user.uid}/${file?.name}`,
              originalProfilePicture: profilePicture,
              originalFileName: fileName,
              setSuccess,
              setSuccessMessage,
            });
          }
        }}
        buttonType={ButtonTypes.submit}
        buttonText="Edit"
        cancelClick={() => {
          navigate('/admin');
        }}
      >
        <>
          <Snackbar
            open={success}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            autoHideDuration={6000}
            onClose={() => setSuccess(false)}
          >
            <Alert onClose={() => setSuccess(false)} severity="success">
              {successMessage}
            </Alert>
          </Snackbar>
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
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />
          {imagePreview ? (
            <ProfileImg alt={fileName} src={imagePreview} />
          ) : (
            <ProfileImg alt={fileName || 'user profile'} src={profilePicture || '../src/images/default.jfif'} />
          )}
          <ProfileImg alt={fileName} src={profilePicture} />
          <input
            type="file"
            onChange={(e) => {
              const { files } = e.target;
              if (files) {
                setFile(files[0]);
                const objectURL = URL.createObjectURL(files[0]);
                setImagePreview(objectURL);
              }
            }}
            accept="image/*"
          />
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
