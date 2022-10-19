import { ActivityData, AthleteData } from './strava';

const clientID = import.meta.env.VITE_CLIENTID;
const clientSecret = import.meta.env.VITE_CLIENTSECRET;
const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`;
const callAthlete = 'https://www.strava.com/api/v3/athlete?access_token=';

export const getActivities = ({
  accessToken,
  setActivities,
}: {
  accessToken: string;
  setActivities: (state: ActivityData[]) => void;
}) => {
  fetch(`${callActivities}${accessToken}`)
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
}: {
  setActivities?: (state: ActivityData[]) => void;
  setAthlete?: (state: AthleteData) => void;
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
      });
  } else {
    if (setActivities) {
      getActivities({ accessToken: currentAccessToken, setActivities });
    }
    if (setAthlete) {
      getAthlete({ accessToken: currentAccessToken, setAthlete });
    }
  }
};
