import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';

import FormWrapper from '../../components/FormWrapper/FormWrapper';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { ButtonTypes } from '../../components/shared/Button/Button';
import Title from '../../components/shared/Title/Title';
import Icons from '../../constants/Icons';
import PageTitles from '../../constants/PageTitles';
import GridWrap from './Register.styles';

function Register() {
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
            }}
            buttonType={ButtonTypes.submit}
            buttonText="Sign up"
            fullWidth
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
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
