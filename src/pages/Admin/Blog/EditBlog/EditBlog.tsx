import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageWrapper from '../../../../components/PageWrapper/PageWrapper/PageWrapper';
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
  const [blog, setBlog] = useState<{ title: string; body: string; date: Date }>();
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
      getBlog(slug, setBlog, setOriginalTitle);
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
            if (blog) {
              if (originalTitle === blog.title) {
                saveBlog(blog.title, blog.body, navigate, 'blog updated');
              } else {
                editBlog(blog.title, blog.body, navigate, originalTitle);
              }
            }
          }}
        >
          <input
            value={blog?.title}
            onChange={(e) => {
              setBlog({ title: e.target.value || '', body: blog?.body || '', date: blog?.date || new Date() });
            }}
            type="text"
            name="title"
            required
          />
          <input
            value={blog?.body}
            onChange={(e) => {
              setBlog({ title: blog?.title || '', body: e.target.value || '', date: blog?.date || new Date() });
            }}
            type="text"
            name="body"
            required
          />
          <Button buttonType="submit" buttonText="Edit" />
        </form>
      </>
    </PageWrapper>
  );
}

export default EditBlog;
