import { CardContent, Grid, Typography } from '@mui/material';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button, { ButtonTypes } from '../../../components/shared/Button/Button';
import Title from '../../../components/shared/Title/Title';
import { IBlog } from '../../../types/Blog.types';
import { getHomepageBlogs } from '../../../utils/Blog.utils';
import { Container, Image, Item, Section } from './Blog.styles';

function Blog() {
  const [blogs, setBlogs] = useState<IBlog[]>();
  const navigate = useNavigate();
  useEffect(() => {
    getHomepageBlogs(setBlogs);
  }, []);
  return (
    <Section>
      <Title h2Text="Latest News" smallText="Keep up to date with my blog" />
      <Container container spacing={2}>
        {blogs?.map((blog) => (
          <Grid item key={blog.title} xs={12} sm={12} md={4} lg={4}>
            <Item>
              <Image component="img" image={blog.image} alt={blog.fileName} />
              <CardContent>
                <Typography component="h2" variant="h5">
                  {blog.title}
                </Typography>
                {parse(`${blog.body.substring(0, 400)}...`)}
                <Button
                  buttonType={ButtonTypes.button}
                  buttonText="Read More"
                  onClick={() => {
                    navigate(`/blog/${blog.title.toLowerCase().replaceAll(' ', '-')}`);
                  }}
                />
              </CardContent>
            </Item>
          </Grid>
        ))}
      </Container>
      <Button buttonType={ButtonTypes.button} buttonText="View all blogs" onClick={() => navigate('/blog')} />
    </Section>
  );
}

export default Blog;
