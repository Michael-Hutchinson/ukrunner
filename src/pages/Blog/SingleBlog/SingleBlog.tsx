import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Timestamp } from 'firebase/firestore';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PageWrapper from '../../../components/PageWrapper/PageWrapper';
import Title from '../../../components/shared/Title/Title';
import { getBlog, getBlogTitles } from '../../../utils/Blog.utils';
import { ALink, Image } from './SingleBlog.styles';

function SingleBlog() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [titles, setTitles] = useState<string[]>([]);
  const [valid, setValid] = useState<boolean | null>(null);
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>();
  const [date, setDate] = useState<Timestamp>();
  const [author, setAuthor] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [surname, setSurname] = useState<string>();
  useEffect(() => {
    getBlogTitles(setTitles);
  }, []);
  useEffect(() => {
    if (slug) {
      const slugAsTitle = slug.replaceAll('-', ' ');
      if (titles.length > 0) {
        if (titles.includes(slugAsTitle)) {
          setValid(true);
        } else {
          setValid(false);
        }
      }
    }
  }, [titles, slug]);
  useEffect(() => {
    if (valid && slug) {
      getBlog(
        slug,
        setTitle,
        setBody,
        setImageURL,
        undefined,
        undefined,
        undefined,
        setDate,
        setAuthor,
        setFirstName,
        setSurname,
      );
    }
    if (valid === false) {
      navigate('/blog');
    }
  }, [valid, slug, navigate]);
  return (
    <PageWrapper title={`${title} | UK Runner`}>
      <>
        <Title h1Text={title} smallText="Read the post below" />
        <Container>
          <Image src={imageURL} alt="placeholder" />
          {parse(body)}
          <Divider light />
          <p>
            Last updated on {date?.toDate().toDateString()} by{' '}
            <ALink to={`/profile/${author}`}>
              {firstName} {surname}
            </ALink>
          </p>
        </Container>
      </>
    </PageWrapper>
  );
}

export default SingleBlog;
