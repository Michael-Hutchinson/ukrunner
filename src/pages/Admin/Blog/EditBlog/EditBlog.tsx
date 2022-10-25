import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageWrapper from '../../../../components/PageWrapper/PageWrapper';
import ReactQuillEditor from '../../../../components/QuillEditor/QuillEditor';
import Button from '../../../../components/shared/Button/Button';
import Title from '../../../../components/shared/Title/Title';
import PageTitles from '../../../../constants/PageTitles';
import { editBlog, getBlog, getBlogTitles, saveBlog } from '../../../Blog/Blog.utils';

function EditBlog() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [titles, setTitles] = useState<string[]>([]);
  const [valid, setValid] = useState<boolean | null>(null);
  const [originalTitle, setOriginalTitle] = useState('');
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
      getBlog(slug, setTitle, setBody, setOriginalTitle);
    }
    if (valid === false) {
      navigate('/admin/blog');
    }
  }, [valid, slug, navigate]);
  return (
    <PageWrapper title={PageTitles.Admin}>
      <>
        <Title h1Text="Edit Blog Post" smallText="You can edit blog posts here" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (title) {
              if (originalTitle === title) {
                saveBlog(title, body || '', navigate, 'blog updated');
              } else {
                editBlog(title, body || '', navigate, originalTitle);
              }
            }
          }}
        >
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            name="title"
            required
          />
          <ReactQuillEditor value={body} onChange={setBody} />
          <Button buttonType="submit" buttonText="Edit" />
        </form>
      </>
    </PageWrapper>
  );
}

export default EditBlog;
