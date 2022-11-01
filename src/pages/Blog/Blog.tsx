import InventoryIcon from '@mui/icons-material/Inventory';
import SearchIcon from '@mui/icons-material/Search';
import { CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Button, { ButtonTypes } from '../../components/shared/Button/Button';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';
import { IBlog } from '../../types/Blog.types';
import { getBlogs } from '../../utils/Blog.utils';
import {
  BlogCard,
  BlogFooter,
  FooterText,
  FormBody,
  FormContainer,
  FormFooter,
  FormHeader,
  ImageCard,
} from './Blog.styles';

function Blog() {
  const [blogs, setBlogs] = useState<IBlog[]>();
  useEffect(() => {
    getBlogs(setBlogs);
  }, []);
  return (
    <PageWrapper title={PageTitles.Blog}>
      <>
        <Title h1Text="Blog" smallText="Keep up to date with my blog and all things happening in my life here" />
        <Container>
          <Grid container spacing={2}>
            <Grid item md={8} sm={12} xs={12}>
              {blogs?.map((blog) => (
                <BlogCard key={blog.title}>
                  <ImageCard component="img" image="https://source.unsplash.com/random" alt="random" />
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {blog.title}
                    </Typography>
                    {parse(blog.body)}
                    <Button buttonType={ButtonTypes.button} buttonText="Read More" />
                  </CardContent>
                  <BlogFooter>
                    <FooterText component="p">Last updated on {blog.date.toDate().toDateString()}.</FooterText>
                  </BlogFooter>
                </BlogCard>
              ))}
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <FormContainer>
                <FormHeader component="section">
                  <SearchIcon fontSize="small" /> <h4>Search</h4>
                </FormHeader>
                <FormBody>
                  <TextField id="search" fullWidth type="search" label="Search blog..." />
                </FormBody>
                <FormFooter />
              </FormContainer>
              <FormContainer>
                <FormHeader component="section">
                  <InventoryIcon fontSize="small" /> <h4>Categories</h4>
                </FormHeader>
                <FormBody>
                  <FormControl fullWidth>
                    <InputLabel id="select-label">Categories</InputLabel>
                    <Select labelId="select-label" id="select" label="Categories">
                      <MenuItem value={10}>Running</MenuItem>
                      <MenuItem value={20}>Fitness</MenuItem>
                      <MenuItem value={30}>Races</MenuItem>
                    </Select>
                  </FormControl>
                </FormBody>
                <FormFooter />
              </FormContainer>
            </Grid>
          </Grid>
        </Container>
      </>
    </PageWrapper>
  );
}

export default Blog;
