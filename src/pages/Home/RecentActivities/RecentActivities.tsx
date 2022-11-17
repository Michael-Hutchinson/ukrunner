import React, { useContext } from 'react';

import { StravaContext } from '../../../helpers/context';
import Section from './RecentActivities.styles';
import convertPolylineIntoRouteInfo from './RecentActivities.utils';

function RecentActivities() {
  const activityData = useContext(StravaContext);
  return (
    <Section>
      {activityData?.activities?.slice(0, 2).map((activity) => {
        const polyline = activity.map.summary_polyline
          ? convertPolylineIntoRouteInfo(activity.map.summary_polyline)
          : null;
        return (
          <div key={activity.id}>
            <p>Name: {activity.name}</p>
            <p>Distance: {activity.distance}</p>
            {activity.type === 'Hike' ? (
              <p>Moving Time: {activity.moving_time}</p>
            ) : (
              <p>Time: {activity.elapsed_time}</p>
            )}
            <p>Avg. Heartrate: {activity.average_heartrate}</p>
            {polyline && (
              <svg
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
              </svg>
            )}
          </div>
        );
      })}
    </Section>
  );
}

export default RecentActivities;
