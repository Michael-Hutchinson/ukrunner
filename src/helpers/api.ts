import { ActivityData } from './strava';

const clientID = import.meta.env.VITE_CLIENTID;
const clientSecret = import.meta.env.VITE_CLIENTSECRET;
const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`;

export const getActivities = ({
  accessToken,
  setLoading,
  setActivities,
}: {
  accessToken: string;
  setLoading: (state: boolean) => void;
  setActivities: (state: ActivityData[]) => void;
}) => {
  fetch(`${callActivities}${accessToken}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.message === 'Authorization Error') {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        getAccessToken({ setLoading, setActivities });
      } else {
        setActivities(data);
        setLoading(false);
      }
    });
};

export const getAccessToken = ({
  setLoading,
  setActivities,
}: {
  setLoading: (state: boolean) => void;
  setActivities: (state: ActivityData[]) => void;
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
        getActivities({ accessToken: result.access_token, setLoading, setActivities });
      });
  } else {
    getActivities({ accessToken: currentAccessToken, setLoading, setActivities });
  }
};
