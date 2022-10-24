import { Container, Grid } from '@mui/material';
import React, { ReactElement } from 'react';
import Sidebar from './Sidebar/Sidebar';

interface IAdminWrapperProps {
  children: ReactElement;
}

function AdminWrapper({ children }: IAdminWrapperProps): ReactElement {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item lg={3} md={4} xs={12}>
          <Sidebar />
        </Grid>
        <Grid item lg={9} md={8} xs={12}>
          <section>{children}</section>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminWrapper;
