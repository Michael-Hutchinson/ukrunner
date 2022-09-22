import { ActivityData } from './strava';

const clientID = import.meta.env.CLIENTID;
const clientSecret = import.meta.env.CLIENTSECRET;
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
    .then(
      (data) => {
        setActivities(data);
        setLoading(false);
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      },
    );
};

export const getAccessToken = ({
  setLoading,
  setActivities,
}: {
  setLoading: (state: boolean) => void;
  setActivities: (state: ActivityData[]) => void;
}) => {
  const refreshToken = import.meta.env.REFRESHTOKEN;
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;
  const currentAccessToken = localStorage.getItem('accessToken');
  if (!currentAccessToken) {
    fetch(callRefresh, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((result) => localStorage.setItem('accessToken', result.access_token));
  } else {
    getActivities({ accessToken: currentAccessToken, setLoading, setActivities });
  }
};
