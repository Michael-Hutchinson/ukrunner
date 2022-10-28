import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Button, { ButtonTypes } from '../../components/shared/Button/Button';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';
import { IBlog } from '../../types/Blog.types';
import { getBlogs } from '../../utils/Blog.utils';

function Blog() {
  const [blogs, setBlogs] = useState<IBlog[]>();
  useEffect(() => {
    getBlogs(setBlogs);
  }, []);
  return (
    <PageWrapper title={PageTitles.Blog}>
      <>
        <Title h1Text="Blog" smallText="Keep up to date with my blog and all things happening in my life here" />
        {blogs?.map((blog) => (
          <Grid key={blog.title} item xs={12} md={6}>
            <CardActionArea component="a" href="#">
              <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  sx={{ height: 160, display: { xs: 'none', sm: 'block' } }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {blog.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {blog.date.toDate().toDateString()}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {parse(blog.body)}
                  </Typography>
                  <Button buttonType={ButtonTypes.button} buttonText="Read More" />
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </>
    </PageWrapper>
  );
}

export default Blog;
