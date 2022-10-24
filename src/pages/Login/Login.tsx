import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';
import PageWrapper from '../../components/PageWrapper/PageWrapper/PageWrapper';
import Button from '../../components/shared/Button/Button';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';
import { firebase } from '../../helpers/firebase';
import FormContainer from './Login.styles';

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
        <Title h2Text="Login" smallText="Login to your UK Runner account here" />
        <FormContainer maxWidth="xs">
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              signInWithEmailAndPassword(email, password);
            }}
          >
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
            <Button buttonType="submit" buttonText="Sign in" fullWidth />
            {error && <Alert severity="error">{ErrorMessages[error.code as keyof typeof ErrorMessages]}</Alert>}
          </Box>
        </FormContainer>
      </>
    </PageWrapper>
  );
}

export default Login;
