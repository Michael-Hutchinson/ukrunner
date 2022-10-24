import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageTitles from '../../constants/PageTitles';
import { db } from '../../helpers/firebase';
import Title from '../../components/shared/Title/Title';

function Blog() {
  const [value, loading, error] = useCollection(collection(db, 'blog'));
  return (
    <PageWrapper title={PageTitles.Blog}>
      <>
        <Title h1Text="Blog" smallText="Keep up to date with my blog and all things happening in my life here" />
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Loading...</span>}
        {value && (
          <>
            {value.docs.map((post) => (
              <div key={post.id}>
                <p>{post.data().title}</p>
                <p>{post.data().body}</p>
              </div>
            ))}
          </>
        )}
      </>
    </PageWrapper>
  );
}

export default Blog;
