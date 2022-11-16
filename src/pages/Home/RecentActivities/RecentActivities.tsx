import React, { useContext } from 'react';

import { StravaContext } from '../../../helpers/context';
import Section from './RecentActivities.styles';

function RecentActivities() {
  const activityData = useContext(StravaContext);
  return (
    <Section>
      {activityData?.activities?.slice(0, 2).map((activity) => (
        <div key={activity.id}>
          <p>Name: {activity.name}</p>
          <p>Distance: {activity.distance}</p>
          {activity.type === 'Hike' ? <p>Moving Time: {activity.moving_time}</p> : <p>Time: {activity.elapsed_time}</p>}
          <p>Avg. Heartrate{activity.average_heartrate}</p>
        </div>
      ))}
    </Section>
  );
}

export default RecentActivities;
