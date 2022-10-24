import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import PageWrapper from '../../../components/PageWrapper/PageWrapper';
import PageTitles from '../../../constants/PageTitles';
import { db } from '../../../helpers/firebase';
import Title from '../../../components/shared/Title/Title';
import Button from '../../../components/shared/Button/Button';

function AdminBlog() {
  const navigate = useNavigate();
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
        <Title h1Text="All News Posts" smallText="All news posts can be viewed, edited and deleted here" />
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
        <Button buttonType="button" buttonText="Add New Post" onClick={() => navigate('/admin/blog/create')} />
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
