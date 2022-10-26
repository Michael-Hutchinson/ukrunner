import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AdminWrapper from '../../../../components/AdminWrapper/AdminWrapper';
import FormWrapper, { Icons } from '../../../../components/FormWrapper/FormWrapper';
import ReactQuillEditor from '../../../../components/QuillEditor/QuillEditor';
import { ButtonTypes } from '../../../../components/shared/Button/Button';
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
  const [validation, setValidation] = useState(false);
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
    <AdminWrapper title={PageTitles.Admin} h1Text="Edit Blog Post" smallText="You can edit blog posts here">
      <FormWrapper
        icon={Icons.Edit}
        headerText="Edit blog post below"
        onSubmit={(e) => {
          e.preventDefault();
          if (title) {
            if (originalTitle.trim() === title.trim()) {
              saveBlog(title.trim(), body || '', navigate, 'blog updated');
            } else {
              editBlog(title, body || '', navigate, originalTitle);
            }
          }
        }}
        buttonType={ButtonTypes.submit}
        buttonText="Edit"
        disabled={validation}
        error={validation ? 'Blog already has this title!' : undefined}
      >
        <>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Blog Title"
            name="title"
            type="text"
            autoComplete="title"
            autoFocus
            value={title || ''}
            defaultValue={title}
            onChange={(e) => {
              if (titles.includes(e.target.value.toLowerCase().trim()) && originalTitle !== e.target.value.trim()) {
                setValidation(true);
              } else {
                setValidation(false);
              }
              setTitle(e.target.value);
            }}
          />
          <ReactQuillEditor value={body} onChange={setBody} />
        </>
      </FormWrapper>
    </AdminWrapper>
  );
}

export default EditBlog;
