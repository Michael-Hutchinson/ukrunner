import { useCallback, useEffect, useState } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';
import { fetchActivities } from '../../helpers/api';
import { useStrava } from '../../helpers/StravaContext';
import { ActivityData } from '../../types/Strava.types';

function Training() {
  const { activities: initialActivities } = useStrava();

  const [activities, setActivities] = useState<ActivityData[]>(initialActivities || []);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setActivities(initialActivities || []);
  }, [initialActivities]);

  const loadMoreActivities = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const newActivities = await fetchActivities({ page: page + 1, perPage: 30 });
      if (newActivities.length === 0) {
        setHasMore(false);
      } else {
        setActivities((prevActivities) => [...prevActivities, ...newActivities]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Error loading more activities:', error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  return (
    <PageWrapper title={PageTitles.Training}>
      <>
        <Title h1Text="Training" smallText="View my training history here" />
        {activities.map((activity) => (
          <p key={activity.id}>{activity.name}</p>
        ))}
        {hasMore && !loading && (
          <button onClick={loadMoreActivities} className="load-more-button">
            Load More
          </button>
        )}
        {!hasMore && <p>No more activities to load.</p>}
      </>
    </PageWrapper>
  );
}

export default Training;
