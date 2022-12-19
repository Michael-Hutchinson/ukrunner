import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button, { ButtonTypes } from '../../../components/shared/Button/Button';
import Title from '../../../components/shared/Title/Title';
import Section from './Blog.styles';

function Blog() {
  const navigate = useNavigate();
  return (
    <Section>
      <div>
        <Title h2Text="Latest News" smallText="Keep up to date with my blog" />
        <p>blog posts here</p>
        <Button buttonType={ButtonTypes.button} buttonText="View all blogs" onClick={() => navigate('/news')} />
      </div>
    </Section>
  );
}

export default Blog;
