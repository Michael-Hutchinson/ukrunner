import React, { createContext, ReactElement, useEffect, useMemo, useState } from 'react';

import { getAccessToken } from './api';
import { ActivityData, AthleteData, StatsData } from './strava';

interface IContextType {
  activities: ActivityData[] | undefined;
  setActivities: (Activities: ActivityData[]) => void;
  athlete: AthleteData | undefined;
  setAthlete: (Athlete: AthleteData) => void;
  stats: StatsData | undefined;
  setStats: (Stats: StatsData) => void;
}

interface ContextProps {
  children: ReactElement;
}

export const StravaContext = createContext<IContextType | null>(null);

function StravaProvider({ children }: ContextProps) {
  const [activities, setActivities] = useState<ActivityData[] | undefined>([]);
  const [athlete, setAthlete] = useState<AthleteData | undefined>();
  const [stats, setStats] = useState<StatsData | undefined>();
  const stravaValues = useMemo(
    () => ({ activities, setActivities, athlete, setAthlete, stats, setStats }),
    [activities, athlete, stats],
  );
  useEffect(() => {
    getAccessToken({ setActivities, setAthlete, setStats });
  }, []);
  return <StravaContext.Provider value={stravaValues}>{children}</StravaContext.Provider>;
}

export default StravaProvider;
