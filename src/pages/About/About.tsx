import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useContext, useState } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Title from '../../components/shared/Title/Title';
import Icons from '../../constants/Icons';
import PageTitles from '../../constants/PageTitles';
import { StravaContext } from '../../helpers/context';
import AboutImage from '../../images/about.png';
import {
  ButtonTab,
  GridBox,
  GridHeader,
  GridSubHeader,
  GridText,
  Img,
  ParentTab,
  Section,
  StatsSection,
} from './About.styles';

function About() {
  const statsData = useContext(StravaContext);
  const data = statsData?.stats;
  const runningActivities = data?.all_run_totals?.count || 0;
  const runningDistance = (data?.all_run_totals.distance || 0) / 1000;
  const runMovingTime = (data?.all_run_totals.moving_time || 0) / 60;
  const averageRunMovingTime = runMovingTime / runningActivities;
  const averageRunDistance = runningDistance / runningActivities;
  const averageRunPace = runMovingTime / runningDistance;
  const cyclingActivities = data?.all_ride_totals?.count || 0;
  const cyclingDistance = (data?.all_ride_totals.distance || 0) / 1000;
  const cyclingMovingTime = (data?.all_ride_totals.moving_time || 0) / 60;
  const averageCyclingMovingTime = cyclingMovingTime / cyclingActivities;
  const averageCyclingDistance = cyclingDistance / cyclingActivities;
  const longestRide = (data?.biggest_ride_distance || 0) / 1000;
  const biggestClimb = data?.biggest_climb_elevation_gain || 0;
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
              <GridText item md={7} xs={12}>
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
              <Grid item md={5} xs={12}>
                <Img alt="me" src={AboutImage} />
              </Grid>
            </Grid>
          </Container>
        </Section>
        <StatsSection>
          <Container>
            <Title h1Text="Stats" smallText="You can view my running and cycling stats here" />
            <Box sx={{ width: '100%' }}>
              <ParentTab value={value} onChange={handleChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <ButtonTab icon={Icons.Run} iconPosition="start" label="Running" />
                <ButtonTab icon={Icons.Bike} iconPosition="start" label="Cycling" />
              </ParentTab>
              <Grid sx={{ margin: 2 }}>
                {value === 0 && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <GridBox>
                        <GridHeader>{runningActivities}</GridHeader>
                        <GridSubHeader>Total runs</GridSubHeader>
                      </GridBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <GridBox>
                        <GridHeader>{runningDistance.toFixed(0)}km</GridHeader>
                        <GridSubHeader>Total distance</GridSubHeader>
                      </GridBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <GridBox>
                        <GridHeader>{averageRunMovingTime.toFixed(2).replace('.', ':')}</GridHeader>
                        <GridSubHeader>Average moving time</GridSubHeader>
                      </GridBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <GridBox>
                        <GridHeader>{averageRunDistance.toFixed(2)}km</GridHeader>
                        <GridSubHeader>Average distance</GridSubHeader>
                      </GridBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <GridBox>
                        <GridHeader>{averageRunPace.toFixed(2)}min/km</GridHeader>
                        <GridSubHeader>Average pace</GridSubHeader>
                      </GridBox>
                    </Grid>
                  </Grid>
                )}
                {value === 1 && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <GridBox>
                        <GridHeader>{cyclingActivities}</GridHeader>
                        <GridSubHeader>Total rides</GridSubHeader>
                      </GridBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <GridBox>
                        <GridHeader>{cyclingDistance.toFixed(0)}km</GridHeader>
                        <GridSubHeader>Total distance</GridSubHeader>
                      </GridBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <GridBox>
                        <GridHeader>{averageCyclingMovingTime.toFixed(2).replace('.', ':')}</GridHeader>
                        <GridSubHeader>Average moving time</GridSubHeader>
                      </GridBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <GridBox>
                        <GridHeader>{averageCyclingDistance.toFixed(2)}km</GridHeader>
                        <GridSubHeader>Average distance</GridSubHeader>
                      </GridBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <GridBox>
                        <GridHeader>{longestRide.toFixed(0)}km</GridHeader>
                        <GridSubHeader>Longest Ride</GridSubHeader>
                      </GridBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <GridBox>
                        <GridHeader>{biggestClimb.toFixed(0)}m</GridHeader>
                        <GridSubHeader>Biggest Climb</GridSubHeader>
                      </GridBox>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Container>
        </StatsSection>
      </>
    </PageWrapper>
  );
}

export default About;
