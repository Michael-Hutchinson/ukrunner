import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper/PageWrapper/PageWrapper';
import Button from '../../components/shared/Button/Button';
import Title from '../../components/shared/Title/Title';
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
        <Title h2Text="Login" smallText="Login to your UK Runner account here" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signInWithEmailAndPassword(email, password);
          }}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            required
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            required
          />
          <Button buttonType="submit" buttonText="Login" />
          {error && <p>{ErrorMessages[error.code as keyof typeof ErrorMessages]}</p>}
        </form>
      </>
    </PageWrapper>
  );
}

export default Login;
