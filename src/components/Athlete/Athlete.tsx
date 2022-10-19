import React, { useContext } from 'react';
import { StravaContext } from '../../helpers/context';

function Athlete() {
  const activityData = useContext(StravaContext);
  return (
    <div>
      <p>{activityData?.athlete?.id}</p>
    </div>
  );
}

export default Athlete;
