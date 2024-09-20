import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';
import { useStrava } from '../../helpers/StravaContext';

function Training() {
  const { activities } = useStrava();

  return (
    <PageWrapper title={PageTitles.Training}>
      <>
        <Title h1Text="Training" smallText="View my training history here" />
        {activities?.map((activity) => (
          <p key={activity.id}>{activity.name}</p>
        ))}
      </>
    </PageWrapper>
  );
}

export default Training;
