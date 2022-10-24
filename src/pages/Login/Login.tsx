import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Container } from '@mui/material';
import PageWrapper from '../../components/PageWrapper/PageWrapper/PageWrapper';
import Button from '../../components/shared/Button/Button';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';
import { firebase } from '../../helpers/firebase';
import { FormBody, FormContainer, FormFooter, FormHeader, UserIcon } from './Login.styles';

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
        <Container maxWidth="xs">
          <FormContainer>
            <FormHeader component="section">
              <UserIcon size="20" title="User" />
              <h4>Please Login below</h4>
            </FormHeader>
            <FormBody
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
              <FormControlLabel control={<Checkbox value="remember" />} label="Remember me" />
              <Button buttonType="submit" buttonText="Sign in" fullWidth />
              {error && <Alert severity="error">{ErrorMessages[error.code as keyof typeof ErrorMessages]}</Alert>}
            </FormBody>
            <FormFooter />
          </FormContainer>
        </Container>
      </>
    </PageWrapper>
  );
}

export default Login;
