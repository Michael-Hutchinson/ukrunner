import { Container } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import FormWrapper from '../../components/FormWrapper/FormWrapper';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { ButtonTypes } from '../../components/shared/Button/Button';
import Title from '../../components/shared/Title/Title';
import Icons from '../../constants/Icons';
import PageTitles from '../../constants/PageTitles';
import { firebase } from '../../helpers/firebase';

enum ErrorMessages {
  'auth/wrong-password' = 'You have entered the wrong password',
  'auth/user-not-found' = 'The email address is not found',
}

const auth = getAuth(firebase);

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  useEffect(() => {
    if (user && !loading && !error) {
      navigate('/admin');
    }
  }, [user, loading, error, navigate]);
  useEffect(() => {
    if (error) {
      setPassword('');
    }
  }, [error]);
  return (
    <PageWrapper title={PageTitles.Login}>
      <>
        <Title h1Text="Login" smallText="Login to your UK Runner account here" />
        <Container maxWidth="xs">
          <FormWrapper
            icon={Icons.User}
            headerText="Please Login below"
            onSubmit={(e) => {
              e.preventDefault();
              signInWithEmailAndPassword(email, password);
            }}
            buttonType={ButtonTypes.submit}
            buttonText="Sign in"
            fullWidth
            error={error ? ErrorMessages[error.code as keyof typeof ErrorMessages] : undefined}
          >
            <>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormControlLabel control={<Checkbox value="remember" />} label="Remember me" />
            </>
          </FormWrapper>
        </Container>
      </>
    </PageWrapper>
  );
}

export default Login;
