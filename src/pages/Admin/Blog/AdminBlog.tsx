import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom';
import PageWrapper from '../../../components/PageWrapper/PageWrapper';
import PageTitles from '../../../constants/PageTitles';
import Title from '../../../components/shared/Title/Title';
import Button, { ButtonTypes } from '../../../components/shared/Button/Button';
import { deleteBlog, getBlogs } from '../../../utils/Blog.utils';
import { IBlog } from '../../../types/Blog.types';

function AdminBlog() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<IBlog[]>();
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
    getBlogs(setBlogs);
  }, []);
  useEffect(() => {
    if (success) {
      getBlogs(setBlogs);
    }
  }, [success]);
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
        <Button
          buttonType={ButtonTypes.button}
          buttonText="Add New Post"
          onClick={() => navigate('/admin/blog/create')}
        />
        <ul>
          {blogs?.map((blog) => (
            <li key={blog.title}>
              <Link style={{ color: 'red' }} to={`/admin/blog/edit/${blog.title.toLowerCase().replaceAll(' ', '-')}`}>
                {blog.title}
              </Link>
              <Button
                buttonType={ButtonTypes.button}
                buttonText="delete"
                onClick={() => deleteBlog(blog.title.toLowerCase().replaceAll(' ', '-'), setSuccessMessage, setSuccess)}
              />
            </li>
          ))}
        </ul>
      </>
    </PageWrapper>
  );
}

export default AdminBlog;
