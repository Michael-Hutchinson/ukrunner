import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Button, { ButtonTypes } from '../../components/shared/Button/Button';
import Title from '../../components/shared/Title/Title';
import PageTitles from '../../constants/PageTitles';
import { auth } from '../../helpers/firebase';
import { IBlog } from '../../types/Blog.types';
import { getBlogsByAuthor } from '../../utils/Blog.utils';
import { followUser, getUser, unfollowUser } from '../../utils/Users.utils';
import FollowModal from './FollowModal/FollowModal';
import { BlogCard, BlogFooter, ChipParent, ChipStyle, FooterText, Image, ImageCard } from './Profile.styles';

function Profile() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { slug } = useParams();
  const [profilePicture, setProfilePicture] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [blogs, setBlogs] = useState<IBlog[]>();
  const [followers, setFollowers] = useState<string[] | null>(null);
  const [following, setFollowing] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState<boolean>();
  const isLoggedInUser = user?.uid === slug;
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (slug && followers) {
      setIsLoading(false);
      setIsFollowing(user ? followers.includes(user.uid) : false);
    }
  }, [followers, slug, user]);
  useEffect(() => {
    if (slug) {
      getUser({
        userID: slug,
        setProfilePicture,
        setFileName,
        setFirstName,
        setSurname,
        setBio,
        navigate,
        setFollowers,
        setFollowing,
      });
      getBlogsByAuthor(setBlogs, slug);
    }
  }, [navigate, slug]);
  if (isLoading) {
    return <p>loading</p>;
  }
  return (
    <PageWrapper title={PageTitles.Default}>
      <>
        <Title h1Text={`${firstName}'s Profile Page`} smallText={`View all of ${firstName}'s blogs below`} />
        {slug && (
          <FollowModal
            userID={slug}
            isOpen={isModalOpen}
            handleClose={() => {
              setIsModalOpen(false);
            }}
          />
        )}
        <Container>
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <Image alt={fileName || 'user profile'} src={profilePicture || '../src/images/default.jfif'} />
              <h2>
                {firstName} {surname}
              </h2>
              <p>{bio}</p>
              <Button
                onClick={() => {
                  setIsModalOpen(true);
                }}
                fullWidth
                buttonType={ButtonTypes.button}
                buttonText={`Followers: ${followers?.length.toString()}`}
              />
              <Button
                onClick={() => {
                  setIsModalOpen(true);
                }}
                fullWidth
                buttonType={ButtonTypes.button}
                buttonText={`Following: ${following?.length.toString()}`}
              />
              {isLoggedInUser && (
                <Button
                  buttonType={ButtonTypes.button}
                  buttonText="Edit Profile"
                  fullWidth
                  onClick={() => {
                    navigate(`/admin/profile`);
                  }}
                />
              )}
              {user && !isLoggedInUser && !isFollowing && (
                <Button
                  buttonType={ButtonTypes.button}
                  buttonText="Follow"
                  fullWidth
                  onClick={() => {
                    if (slug) {
                      followUser({ userToFollow: slug, currentUser: user.uid, setIsFollowing });
                    }
                  }}
                />
              )}
              {user && !isLoggedInUser && isFollowing && (
                <Button
                  buttonType={ButtonTypes.button}
                  buttonText="Unfollow"
                  fullWidth
                  onClick={() => {
                    if (slug) {
                      unfollowUser({ userToFollow: slug, currentUser: user.uid, setIsFollowing });
                    }
                  }}
                />
              )}
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
