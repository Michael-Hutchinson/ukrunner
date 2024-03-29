import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import FormWrapper from '../../components/FormWrapper/FormWrapper';
import { LinkText } from '../../components/FormWrapper/FormWrapper.styles';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { ButtonTypes } from '../../components/shared/Button/Button';
import Title from '../../components/shared/Title/Title';
import Icons from '../../constants/Icons';
import PageTitles from '../../constants/PageTitles';
import { auth } from '../../helpers/firebase';
import { registerUser } from '../../utils/Users.utils';
import GridWrap from './Register.styles';

enum ErrorMessages {
  'auth/email-already-in-use' = 'This email already exists',
  'auth/weak-password' = 'Password should be at least 6 characters',
}

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState<{ code: string; message: string }>();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  useEffect(() => {
    if (user && !loading && !error) {
      navigate('/admin');
    }
  }, [user, loading, error, navigate]);
  return (
    <PageWrapper title={PageTitles.Register}>
      <>
        <Title h1Text="Register" smallText="Create a new account here" />
        <Container maxWidth="xs">
          <FormWrapper
            icon={Icons.Lock}
            headerText="Register a new account"
            onSubmit={(e) => {
              e.preventDefault();
              registerUser({
                firstName,
                surname,
                email,
                password,
                setRegisterError,
                signInWithEmailAndPassword,
              });
            }}
            buttonType={ButtonTypes.submit}
            buttonText="Sign up"
            fullWidth
            error={registerError ? ErrorMessages[registerError.code as keyof typeof ErrorMessages] : undefined}
            linkText={<LinkText to="/login">Already got an account? Login here</LinkText>}
          >
            <GridWrap container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="surname"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={surname}
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Sign up to the newsletter."
                />
              </Grid>
            </GridWrap>
          </FormWrapper>
        </Container>
      </>
    </PageWrapper>
  );
}

export default Register;
