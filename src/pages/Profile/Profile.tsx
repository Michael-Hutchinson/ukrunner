import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageTitles from '../../constants/PageTitles';
import { getUser } from '../../utils/Users.utils';

function Profile() {
  const { slug } = useParams();
  const [firstName, setFirstName] = useState<string>('');
  useEffect(() => {
    if (slug) {
      getUser(slug, setFirstName);
    }
  }, [slug]);
  return (
    <PageWrapper title={PageTitles.Default}>
      <>
        <h1>Profile Page</h1>
        <p>{firstName}</p>
      </>
    </PageWrapper>
  );
}

export default Profile;
