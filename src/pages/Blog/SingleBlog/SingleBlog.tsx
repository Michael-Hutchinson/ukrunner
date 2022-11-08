import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PageWrapper from '../../../components/PageWrapper/PageWrapper';
import PageTitles from '../../../constants/PageTitles';
import { getBlog, getBlogTitles } from '../../../utils/Blog.utils';

function SingleBlog() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [titles, setTitles] = useState<string[]>([]);
  const [valid, setValid] = useState<boolean | null>(null);
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();
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
      getBlog(slug, setTitle, setBody);
    }
    if (valid === false) {
      navigate('/blog');
    }
  }, [valid, slug, navigate]);
  return (
    <PageWrapper title={PageTitles.Blog}>
      <>
        <h1>{title}</h1>
        <h2>{body}</h2>
      </>
    </PageWrapper>
  );
}

export default SingleBlog;
