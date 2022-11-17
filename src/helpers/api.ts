import { ActivityData, AthleteData, StatsData } from './strava';

const clientID = import.meta.env.VITE_CLIENTID;
const clientSecret = import.meta.env.VITE_CLIENTSECRET;
const callActivities = `https://www.strava.com/api/v3/athlete/activities?per_page=30&access_token=`;
const callStats = `https://www.strava.com/api/v3/athletes/7944495/stats?access_token=`;
const callAthlete = 'https://www.strava.com/api/v3/athlete?access_token=';

export const getStats = ({ accessToken, setStats }: { accessToken: string; setStats: (state: StatsData) => void }) => {
  fetch(`${callStats}${accessToken}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.message === 'Authorization Error') {
        localStorage.removeItem('accessToken');
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        getAccessToken({ setStats });
      } else {
        setStats(data);
      }
    });
};

export const getActivities = ({
  accessToken,
  setActivities,
  pageNumber,
}: {
  accessToken: string;
  setActivities: (state: ActivityData[]) => void;
  pageNumber?: number;
}) => {
  fetch(`${callActivities}${accessToken}&page=${pageNumber || `1`}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.message === 'Authorization Error') {
        localStorage.removeItem('accessToken');
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        getAccessToken({ setActivities });
      } else {
        setActivities(data);
      }
    });
};

export const getAthlete = ({
  accessToken,
  setAthlete,
}: {
  accessToken: string;
  setAthlete: (state: AthleteData) => void;
}) => {
  fetch(`${callAthlete}${accessToken}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.message === 'Authorization Error') {
        localStorage.removeItem('accessToken');
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        getAccessToken({ setAthlete });
      } else {
        setAthlete(data);
      }
    });
};

export const getAccessToken = ({
  setActivities,
  setAthlete,
  setStats,
}: {
  setActivities?: (state: ActivityData[]) => void;
  setAthlete?: (state: AthleteData) => void;
  setStats?: (state: StatsData) => void;
}) => {
  const refreshToken = import.meta.env.VITE_REFRESHTOKEN;
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;
  const currentAccessToken = localStorage.getItem('accessToken');
  if (!currentAccessToken || currentAccessToken === 'undefined') {
    fetch(callRefresh, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem('accessToken', result.access_token);
        if (setActivities) {
          getActivities({ accessToken: result.access_token, setActivities });
        }
        if (setAthlete) {
          getAthlete({ accessToken: result.access_token, setAthlete });
        }
        if (setStats) {
          getStats({ accessToken: result.access_token, setStats });
        }
      });
  } else {
    if (setActivities) {
      getActivities({ accessToken: currentAccessToken, setActivities });
    }
    if (setAthlete) {
      getAthlete({ accessToken: currentAccessToken, setAthlete });
    }
    if (setStats) {
      getStats({ accessToken: currentAccessToken, setStats });
    }
  }
};
