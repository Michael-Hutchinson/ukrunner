import React, { useContext, useEffect, useState } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Button, { ButtonTypes } from '../../components/shared/Button/Button';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';
import { getPaginatedActivities } from '../../helpers/api';
import { StravaContext } from '../../helpers/context';

function Training() {
  const activityData = useContext(StravaContext);
  const [activities, setActivities] = useState(activityData?.activities || []);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (activities.length === 0) {
      setLoading(true);
      getPaginatedActivities({
        setActivities,
        pageNumber: 1,
        accessToken: localStorage.getItem('accessToken') || '',
        currentActivities: activities,
        setLoading,
      });
    }
  }, [activities]);
  return (
    <PageWrapper title={PageTitles.Training}>
      <>
        <Title h1Text="Training" smallText="View my training history here" />
        {activities.map((activity) => (
          <p key={activity.id}>{activity.name}</p>
        ))}
        {loading ? (
          <p>Loading</p>
        ) : (
          <Button
            buttonType={ButtonTypes.button}
            buttonText="Load more"
            onClick={() => {
              setPage(page + 1);
              setLoading(true);
              getPaginatedActivities({
                setActivities,
                pageNumber: page + 1,
                accessToken: localStorage.getItem('accessToken') || '',
                currentActivities: activities,
                setLoading,
              });
            }}
          />
        )}
      </>
    </PageWrapper>
  );
}

export default Training;
