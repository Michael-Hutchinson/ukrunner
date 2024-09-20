import { createContext, useContext, useMemo } from 'react';
import { useQuery } from 'react-query';

import { ActivityData, StatsData } from '../types/Strava.types';
import { fetchActivities, fetchStats } from './api';

interface StravaContextType {
  activities: ActivityData[] | undefined;
  stats: StatsData | undefined;
  isLoading: boolean;
  error: unknown;
}

const StravaContext = createContext<StravaContextType | undefined>(undefined);

export function StravaProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const {
    data: activities,
    error: activitiesError,
    isLoading: activitiesLoading,
  } = useQuery(
    'stravaActivities',
    () =>
      fetchActivities({
        perPage: 30,
        page: 1,
      }),
    {
      cacheTime: 6 * 60 * 60 * 1000, // 6 hours
    },
  );

  const {
    data: stats,
    error: statsError,
    isLoading: statsLoading,
  } = useQuery('stravaStats', fetchStats, {
    cacheTime: 6 * 60 * 60 * 1000, // 6 hours
  });

  const isLoading = activitiesLoading || statsLoading;
  const error = activitiesError || statsError;

  return (
    <StravaContext.Provider
      value={useMemo(
        () => ({
          activities,
          stats,
          isLoading,
          error,
        }),
        [activities, stats, isLoading, error],
      )}
    >
      {children}
    </StravaContext.Provider>
  );
}

export const useStrava = () => {
  const context = useContext(StravaContext);
  if (!context) {
    throw new Error('useStrava must be used within a StravaProvider');
  }
  return context;
};
