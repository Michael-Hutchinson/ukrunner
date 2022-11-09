import InventoryIcon from '@mui/icons-material/Inventory';
import SearchIcon from '@mui/icons-material/Search';
import { CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Button, { ButtonTypes } from '../../components/shared/Button/Button';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';
import { IBlog } from '../../types/Blog.types';
import { getBlogCategories, getBlogs } from '../../utils/Blog.utils';
import {
  BlogCard,
  BlogFooter,
  ChipParent,
  ChipStyle,
  FooterText,
  FormBody,
  FormContainer,
  FormFooter,
  FormHeader,
  ImageCard,
} from './Blog.styles';

function Blog() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<IBlog[]>();
  const [category, setCategory] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState('all');
  const [filteredBlogs, setFilteredBlogs] = useState<IBlog[]>();
  const results = filteredBlogs?.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()));
  useEffect(() => {
    getBlogs(setBlogs);
    getBlogCategories(setCategory);
  }, []);
  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);
  useEffect(() => {
    if (filters === 'all') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs?.filter((blog) => blog.categories?.includes(filters));
      setFilteredBlogs(filtered);
    }
  }, [blogs, filters]);
  return (
    <PageWrapper title={PageTitles.Blog}>
      <>
        <Title h1Text="Blog" smallText="Keep up to date with my blog and all things happening in my life here" />
        <Container>
          <Grid container spacing={2}>
            <Grid item md={8} sm={12} xs={12}>
              {results?.map((blog) => (
                <BlogCard key={blog.title}>
                  <ChipParent>
                    {blog.categories.map((cat) => (
                      <ChipStyle key={cat} label={cat} />
                    ))}
                  </ChipParent>
                  <ImageCard component="img" image={blog.image || 'https://source.unsplash.com/random'} alt="random" />
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
                  <TextField
                    id="search"
                    fullWidth
                    type="search"
                    label="Search blog..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
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
                    <Select
                      labelId="select-label"
                      id="select"
                      defaultValue={filters}
                      value={filters}
                      onChange={(e) => {
                        setFilters(e.target.value);
                      }}
                      label="Categories"
                    >
                      {category.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                          {cat}
                        </MenuItem>
                      ))}
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
