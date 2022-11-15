import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Button, { ButtonTypes } from '../../components/shared/Button/Button';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';
import { IBlog } from '../../types/Blog.types';
import { getBlogsByAuthor } from '../../utils/Blog.utils';
import { getUser } from '../../utils/Users.utils';
import { BlogCard, BlogFooter, ChipParent, ChipStyle, FooterText, Image, ImageCard } from './Profile.styles';

function Profile() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [profilePicture, setProfilePicture] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [blogs, setBlogs] = useState<IBlog[]>();
  useEffect(() => {
    if (slug) {
      getUser({ userID: slug, setProfilePicture, setFileName, setFirstName, setSurname, setBio, navigate });
      getBlogsByAuthor(setBlogs, slug);
    }
  }, [navigate, slug]);
  return (
    <PageWrapper title={PageTitles.Default}>
      <>
        <Title h1Text={`${firstName}'s Profile Page`} smallText={`View all of ${firstName}'s blogs below`} />
        <Container>
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <Image alt={fileName} src={profilePicture} />
              <h2>
                {firstName} {surname}
              </h2>
              <p>{bio}</p>
            </Grid>
            <Grid item md={9} xs={12}>
              {blogs?.map((blog) => (
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
          </Grid>
        </Container>
      </>
    </PageWrapper>
  );
}

export default Profile;
