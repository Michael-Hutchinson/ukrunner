import React, { useState, useEffect } from 'react';
import { getAccessToken } from '../../helpers/api';
import { AthleteData } from '../../helpers/strava';

function Athlete() {
  const [loading, setLoading] = useState(true);
  const [athlete, setAthlete] = useState<AthleteData>();
  useEffect(() => {
    getAccessToken({ setLoading, setAthlete });
  }, []);
  if (loading) {
    return <p>LOADING</p>;
  }
  return (
    <div>
      <p>{athlete?.id}</p>
    </div>
  );
}

export default Athlete;
