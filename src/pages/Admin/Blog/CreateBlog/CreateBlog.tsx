import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AdminWrapper from '../../../../components/AdminWrapper/AdminWrapper';
import FormWrapper from '../../../../components/FormWrapper/FormWrapper';
import ReactQuillEditor from '../../../../components/QuillEditor/QuillEditor';
import { ButtonTypes } from '../../../../components/shared/Button/Button';
import Icons from '../../../../constants/Icons';
import PageTitles from '../../../../constants/PageTitles';
import { getBlogCategories, getBlogTitles, saveBlog } from '../../../../utils/Blog.utils';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [file, setFile] = useState<File | undefined>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [titles, setTitles] = useState<string[]>([]);
  const [validation, setValidation] = useState(false);
  const handleChange = (event: SelectChangeEvent<typeof selectedCategories>) => {
    const {
      target: { value },
    } = event;
    setSelectedCategories(typeof value === 'string' ? value.split(',') : value);
  };
  useEffect(() => {
    getBlogTitles(setTitles);
    getBlogCategories(setCategories);
  }, []);
  const navigate = useNavigate();
  return (
    <AdminWrapper title={PageTitles.Admin} h1Text="Add New Blog Posts Here" smallText="Here you can add new blog posts">
      <FormWrapper
        icon={Icons.Create}
        headerText="Add a new blog post below"
        onSubmit={(e) => {
          e.preventDefault();
          saveBlog(title.trim(), body, selectedCategories, navigate, 'blog created', file, `images/${file?.name}`);
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
          <input
            type="file"
            onChange={(e) => {
              const { files } = e.target;
              if (files) {
                setFile(files[0]);
              }
            }}
            accept=""
          />
          <ReactQuillEditor value={body} onChange={setBody} placeholder="Blog body text" />
          <FormControl fullWidth margin="normal">
            <InputLabel id="select-label">Categories</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              multiple
              defaultValue={selectedCategories}
              value={selectedCategories}
              onChange={handleChange}
              renderValue={(selected) => selected.join(', ')}
              label="Categories"
            >
              {categories.map((cat) => {
                if (cat !== 'all') {
                  return (
                    <MenuItem key={cat} value={cat}>
                      <Checkbox checked={selectedCategories.indexOf(cat) > -1} />
                      <ListItemText primary={cat} />
                    </MenuItem>
                  );
                }
                return null;
              })}
            </Select>
          </FormControl>
        </>
      </FormWrapper>
    </AdminWrapper>
  );
}

export default CreateBlog;
