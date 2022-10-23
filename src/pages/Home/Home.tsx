import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import PageWrapper from '../../components/PageWrapper/PageWrapper/PageWrapper';
import PageTitles from '../../constants/PageTitles';
import About from './About/About';
import Hero from './Hero/Hero';
import { db } from '../../helpers/firebase';

function Home() {
  const [value, loading, error] = useCollection(collection(db, 'blog'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  return (
    <PageWrapper title={PageTitles.Home}>
      <>
        <Hero />
        <About />
        <p>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Loading...</span>}
          {value && (
            <>
              {value.docs.map((doc) => (
                <>
                  <p key={doc.id}>{doc.data().title}</p>
                  <p>{doc.data().body}</p>
                </>
              ))}
            </>
          )}
        </p>
      </>
    </PageWrapper>
  );
}

export default Home;
