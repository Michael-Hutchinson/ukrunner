import { Container, Grid } from '@mui/material';
import React, { ReactElement } from 'react';

import PageWrapper from '../PageWrapper/PageWrapper';
import Title from '../shared/Title/Title';
import Sidebar from './Sidebar/Sidebar';

interface IAdminWrapperProps {
  children: ReactElement;
  h1Text: string;
  smallText: string;
  title: string;
}

function AdminWrapper({ children, h1Text, smallText, title }: IAdminWrapperProps): ReactElement {
  return (
    <PageWrapper title={title}>
      <>
        <Title h1Text={h1Text} smallText={smallText} />
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={3} md={4} xs={12}>
              <Sidebar />
            </Grid>
            <Grid item lg={9} md={8} xs={12}>
              <section>{children}</section>
            </Grid>
          </Grid>
        </Container>
      </>
    </PageWrapper>
  );
}

export default AdminWrapper;
