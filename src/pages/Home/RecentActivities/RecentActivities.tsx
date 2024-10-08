import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NearMeIcon from '@mui/icons-material/NearMe';
import TimerIcon from '@mui/icons-material/Timer';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button, { ButtonTypes } from '../../../components/shared/Button/Button';
import Title from '../../../components/shared/Title/Title';
import { useStrava } from '../../../helpers/StravaContext';
import {
  ActivityImage,
  ActivityInner,
  ActivityItem,
  ActivitySection,
  ActivitySubTitle,
  ActivityTitle,
  ParText,
  Section,
  TopSection,
} from './RecentActivities.styles';
import convertPolylineIntoRouteInfo from './RecentActivities.utils';

function RecentActivities() {
  const { activities } = useStrava();
  const navigate = useNavigate();
  return (
    <Section>
      <Title h2Text="Activities" smallText="All my strava activities" />
      <ActivitySection>
        {activities?.slice(0, 2).map((activity) => {
          const polyline = activity.map.summary_polyline
            ? convertPolylineIntoRouteInfo(activity.map.summary_polyline)
            : null;
          return (
            <ActivityItem key={activity.id}>
              <ActivityInner>
                <ActivityTitle>{activity.name}</ActivityTitle>
                <div>
                  <TopSection>
                    <ActivitySubTitle>
                      {(activity.distance / 1000).toFixed(2)}
                      <sub>km</sub>
                      <ParText>
                        <NearMeIcon fontSize="small" />
                        Distance
                      </ParText>
                    </ActivitySubTitle>
                    {activity.type === 'Hike' ? (
                      <ActivitySubTitle>
                        {(activity.moving_time / 60).toFixed(2).replace('.', ':')}
                        <ParText>
                          <AccessTimeIcon fontSize="small" />
                          Moving Time
                        </ParText>
                      </ActivitySubTitle>
                    ) : (
                      <ActivitySubTitle>
                        {activity.elapsed_time}
                        <ParText>
                          <AccessTimeIcon fontSize="small" />
                          Time
                        </ParText>
                      </ActivitySubTitle>
                    )}
                  </TopSection>
                  <TopSection bottom>
                    <ActivitySubTitle small>
                      {((activity.moving_time / 60 / activity.distance) * 1000).toFixed(2)}
                      <sub>/km</sub>
                      <ParText>
                        <TimerIcon fontSize="small" />
                        Avg. Pace
                      </ParText>
                    </ActivitySubTitle>
                    <ActivitySubTitle small>
                      {activity.average_heartrate}
                      <sub>bpm</sub>
                      <ParText>
                        <FavoriteIcon fontSize="small" />
                        Avg. Heartrate
                      </ParText>
                    </ActivitySubTitle>
                    <ActivitySubTitle small>
                      {activity.sport_type}
                      <ParText>
                        {activity.type === 'Hike' || activity.type === 'Run' ? (
                          <DirectionsRunIcon fontSize="small" />
                        ) : (
                          <DirectionsBikeIcon fontSize="small" />
                        )}
                        Activity Type
                      </ParText>
                    </ActivitySubTitle>
                  </TopSection>
                </div>
                {polyline && (
                  <ActivityImage
                    viewBox={`${polyline.minX} ${polyline.minY} ${polyline.maxX - polyline.minX} ${
                      polyline.maxY - polyline.minY
                    }`}
                  >
                    <polyline
                      points={polyline.points}
                      fill="none"
                      stroke="black"
                      strokeWidth={polyline.points.length / 100}
                    />
                  </ActivityImage>
                )}
              </ActivityInner>
            </ActivityItem>
          );
        })}
      </ActivitySection>
      <Button buttonType={ButtonTypes.button} buttonText="View all activities" onClick={() => navigate('/training')} />
    </Section>
  );
}

export default RecentActivities;
