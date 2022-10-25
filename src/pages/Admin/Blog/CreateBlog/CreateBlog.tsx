import React, { useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../../../components/PageWrapper/PageWrapper';
import Button from '../../../../components/shared/Button/Button';
import Title from '../../../../components/shared/Title/Title';
import PageTitles from '../../../../constants/PageTitles';
import { getBlogTitles, saveBlog } from '../../../Blog/Blog.utils';
import ReactQuillEditor from '../../../../components/QuillEditor/QuillEditor';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titles, setTitles] = useState<string[]>([]);
  const [validation, setValidation] = useState(false);
  useEffect(() => {
    getBlogTitles(setTitles);
  }, []);
  const navigate = useNavigate();
  return (
    <PageWrapper title={PageTitles.Admin}>
      <>
        <Title h1Text="Add New Blog Posts Here" smallText="Here you can add new blog posts" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveBlog(title, body, navigate, 'blog created');
          }}
        >
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (titles.includes(e.target.value.toLowerCase())) {
                setValidation(true);
              } else {
                setValidation(false);
              }
            }}
            type="text"
            name="title"
            required
          />
          <ReactQuillEditor value={body} onChange={setBody} />
          <Button buttonType="submit" buttonText="Create Blog" disabled={validation} />
          {validation && <Alert severity="error">Title already exists!</Alert>}
        </form>
      </>
    </PageWrapper>
  );
}

export default CreateBlog;
