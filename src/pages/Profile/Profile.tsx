import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageTitles from '../../constants/PageTitles';
import { getUser } from '../../utils/Users.utils';

function Profile() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [firstName, setFirstName] = useState<string>('');
  useEffect(() => {
    if (slug) {
      getUser({ userID: slug, setFirstName, navigate });
    }
  }, [navigate, slug]);
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
