import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import PageWrapper from '../../../components/PageWrapper/PageWrapper/PageWrapper';
import PageTitles from '../../../constants/PageTitles';
import { db } from '../../../helpers/firebase';

function AdminBlog() {
  const [value, loading, error] = useCollection(collection(db, 'blog'));
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const successParam = urlParams.get('success');
    const successMsg = urlParams.get('message');
    if (successParam) {
      setSuccess(Boolean(successParam));
    }
    if (successMsg) {
      setSuccessMessage(successMsg);
    }
  }, []);
  return (
    <PageWrapper title={PageTitles.Admin}>
      <>
        <h1>Blog View Page Crap</h1>
        <Snackbar
          open={success}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
        >
          <Alert onClose={() => setSuccess(false)} severity="success">
            {successMessage}
          </Alert>
        </Snackbar>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Loading...</span>}
        {value && (
          <ul>
            {value.docs.map((post) => (
              <li key={post.id}>
                <Link style={{ color: 'red' }} to={`/admin/blog/edit/${post.id}`}>
                  {post.data().title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    </PageWrapper>
  );
}

export default AdminBlog;
