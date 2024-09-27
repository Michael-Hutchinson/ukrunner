import axios from 'axios';

import { ActivityData, StatsData } from '../types/Strava.types';

interface AuthData {
  access_token: string;
  expires_at: number;
  refresh_token: string;
}

const refreshAccessToken = async (refreshToken: string) => {
  const clientId = import.meta.env.VITE_CLIENTID;
  const clientSecret = import.meta.env.VITE_CLIENTSECRET;

  const response = await axios.post<AuthData>('https://www.strava.com/oauth/token', {
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  });

  return response.data;
};

const getValidAccessToken = async () => {
  let authData: AuthData | null = JSON.parse(localStorage.getItem('stravaAuth') ?? 'null');

  if (!authData || authData.expires_at * 1000 < Date.now()) {
    // If the token is expired or doesn't exist, refresh it
    const refreshToken = authData?.refresh_token ?? import.meta.env.VITE_REFRESHTOKEN;
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    authData = await refreshAccessToken(refreshToken);
    localStorage.setItem('stravaAuth', JSON.stringify(authData));
  }

  return authData.access_token;
};

const fetchAthleteData = async () => {
  const accessToken = await getValidAccessToken();
  const response = await axios.get('https://www.strava.com/api/v3/athlete', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

interface FetchActivitiesParams {
  perPage?: number;
  page?: number;
}

export const fetchActivities = async ({ perPage, page }: FetchActivitiesParams) => {
  const accessToken = await getValidAccessToken();
  const response = await axios.get<ActivityData[]>('https://www.strava.com/api/v3/athlete/activities', {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: { per_page: perPage, page },
  });
  return response.data;
};

export const fetchStats = async () => {
  const accessToken = await getValidAccessToken();
  const athlete = await fetchAthleteData();
  const response = await axios.get<StatsData>(`https://www.strava.com/api/v3/athletes/${athlete.id}/stats`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};
