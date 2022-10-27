import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { ButtonTypes } from '../../../../components/shared/Button/Button';
import PageTitles from '../../../../constants/PageTitles';
import { getBlogTitles, saveBlog } from '../../../../utils/Blog.utils';
import ReactQuillEditor from '../../../../components/QuillEditor/QuillEditor';
import AdminWrapper from '../../../../components/AdminWrapper/AdminWrapper';
import FormWrapper from '../../../../components/FormWrapper/FormWrapper';
import Icons from '../../../../constants/Icons';

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
    <AdminWrapper title={PageTitles.Admin} h1Text="Add New Blog Posts Here" smallText="Here you can add new blog posts">
      <FormWrapper
        icon={Icons.Create}
        headerText="Add a new blog post below"
        onSubmit={(e) => {
          e.preventDefault();
          saveBlog(title.trim(), body, navigate, 'blog created');
        }}
        buttonType={ButtonTypes.submit}
        buttonText="Create blog"
        disabled={validation}
        error={validation ? 'Title already exists!' : undefined}
        cancelClick={() => {
          navigate('/admin/blog');
        }}
      >
        <>
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            id="title"
            label="Blog Title"
            name="title"
            type="text"
            autoComplete="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (titles.includes(e.target.value.toLowerCase().trim())) {
                setValidation(true);
              } else {
                setValidation(false);
              }
            }}
          />
          <ReactQuillEditor value={body} onChange={setBody} placeholder="Blog body text" />
        </>
      </FormWrapper>
    </AdminWrapper>
  );
}

export default CreateBlog;
