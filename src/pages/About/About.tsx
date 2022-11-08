import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useContext, useState } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Title from '../../components/shared/Title/Title';
import Icons from '../../constants/Icons';
import PageTitles from '../../constants/PageTitles';
import { StravaContext } from '../../helpers/context';
import { ButtonTab, GridText, Img, ParentTab, Section, StatsSection } from './About.styles';

function About() {
  const statsData = useContext(StravaContext);
  const data = statsData?.stats;
  const averageMovingTime = (data?.all_run_totals.moving_time || 0) / (data?.all_run_totals.count || 0) / 60;
  // const runningActivities = data?.all_run_totals?.count;
  // const cyclingActivities = data?.all_ride_totals?.count;
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <PageWrapper title={PageTitles.About}>
      <>
        <Title h1Text="About me" smallText="Find out everything about me here" />
        <Section>
          <Container>
            <Grid container spacing={2}>
              <GridText item xs={7}>
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
              </GridText>
              <Grid item xs={5}>
                <Img alt="" src="./src/images/about.png" />
              </Grid>
            </Grid>
          </Container>
        </Section>
        <StatsSection>
          <Container>
            <Title h1Text="Stats" smallText="You can view my running and cycling stats here" />
            {/* <p>Total activities: {runningActivities + cyclingActivities}</p> */}
            {/* <p>Total Runs: {data?.all_run_totals.count}</p>
            <p>Total Rides: {data?.all_ride_totals.count}</p> */}
            <p>{averageMovingTime.toFixed(2)} minutes</p>
            <Box sx={{ display: 'flex' }}>
              <ParentTab
                value={value}
                onChange={handleChange}
                orientation="vertical"
                sx={{ borderRight: 1, borderColor: 'divider' }}
              >
                <ButtonTab icon={Icons.Run} iconPosition="start" label="Running" />
                <ButtonTab icon={Icons.Bike} iconPosition="start" label="Cycling" />
              </ParentTab>
              <Box sx={{ margin: 2 }}>
                {value === 0 && (
                  <Box>
                    <Typography>The first tab</Typography>
                  </Box>
                )}
                {value === 1 && (
                  <Box>
                    <Typography>The second tab</Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Container>
        </StatsSection>
      </>
    </PageWrapper>
  );
}

export default About;
