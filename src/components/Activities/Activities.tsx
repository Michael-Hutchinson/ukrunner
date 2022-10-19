import React, { useContext } from 'react';
import { StravaContext } from '../../helpers/context';

function Activities() {
  const activityData = useContext(StravaContext);
  return (
    <div>
      {activityData?.activities?.map((activity) => (
        <p key={activity.id}>{activity.id}</p>
      ))}
    </div>
  );
}

export default Activities;
