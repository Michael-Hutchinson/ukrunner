import React, { useState, useEffect } from 'react';
import { getAccessToken } from '../../helpers/api';
import { ActivityData } from '../../helpers/strava';

function Activities() {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState<ActivityData[]>([]);
  useEffect(() => {
    getAccessToken({ setLoading, setActivities });
  }, []);
  if (loading) {
    return <p>LOADING</p>;
  }
  return (
    <div>
      {activities.map((activity) => (
        <p key={activity.id}>{activity.id}</p>
      ))}
    </div>
  );
}

export default Activities;
