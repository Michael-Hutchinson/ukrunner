import { CardMedia, Grid, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AdminWrapper from '../../../components/AdminWrapper/AdminWrapper';
import Button, { ButtonTypes } from '../../../components/shared/Button/Button';
import Icons from '../../../constants/Icons';
import PageTitles from '../../../constants/PageTitles';
import { IBlog } from '../../../types/Blog.types';
import { deleteBlog, getBlogs } from '../../../utils/Blog.utils';
import { BlogContent, ButtonSection, Section, Wrapper } from './AdminBlog.styles';

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
    <AdminWrapper
      h1Text="All News Posts"
      smallText="All news posts can be viewed, edited and deleted here"
      title={PageTitles.Admin}
    >
      <>
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
          margin="inherit"
          buttonType={ButtonTypes.button}
          buttonText="Add New Post"
          onClick={() => navigate('/admin/blog/create')}
        />
        <Wrapper container spacing={2}>
          {blogs?.map((blog) => (
            <Grid item key={blog.title} xs={12} sm={6} md={6} lg={4}>
              <Section>
                {/* TODO - Add blog images when functionality is created */}
                <CardMedia component="img" image={blog.image || 'https://source.unsplash.com/random'} alt="random" />
                <BlogContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {blog.title.substring(0, 50)}
                  </Typography>
                  {parse(`${blog.body.substring(0, 400)}...`)}
                </BlogContent>
                <ButtonSection>
                  <Button icon={Icons.View} buttonType={ButtonTypes.button} />
                  <Button
                    icon={Icons.Edit}
                    buttonType={ButtonTypes.button}
                    onClick={() => {
                      navigate(`/admin/blog/edit/${blog.title.toLowerCase().replaceAll(' ', '-')}`);
                    }}
                  />
                  <Button
                    icon={Icons.Delete}
                    buttonType={ButtonTypes.button}
                    onClick={() =>
                      deleteBlog(
                        blog.title.toLowerCase().replaceAll(' ', '-'),
                        setSuccessMessage,
                        setSuccess,
                        blog.fileName,
                      )
                    }
                  />
                </ButtonSection>
              </Section>
            </Grid>
          ))}
        </Wrapper>
      </>
    </AdminWrapper>
  );
}

export default AdminBlog;
