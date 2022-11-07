import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';
import { Img, Section } from './About.styles';

function About() {
  return (
    <PageWrapper title={PageTitles.About}>
      <>
        <Title h1Text="About me" smallText="Find out everything about me here" />
        <Section>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <h2>Hello everyone! I&apos;m Michael, an incredibly average runner based in Manchester, UK.</h2>
                <p>
                  If you want to know more just email me at michael@ukrunner.com or use the contact form found on the
                  contact page.
                </p>
                <p>
                  If you want to know more just email me at michael@ukrunner.com or use the contact form found on the
                  contact page.
                </p>
                <p>
                  If you want to know more just email me at michael@ukrunner.com or use the contact form found on the
                  contact page.
                </p>
              </Grid>
              <Grid item xs={5}>
                <Img alt="" src="./src/images/about.png" />
              </Grid>
            </Grid>
          </Container>
        </Section>
        <section>
          <p>hello</p>
        </section>
      </>
    </PageWrapper>
  );
}

export default About;
