import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';

import AdminWrapper from '../../../../components/AdminWrapper/AdminWrapper';
import FormWrapper from '../../../../components/FormWrapper/FormWrapper';
import ReactQuillEditor from '../../../../components/QuillEditor/QuillEditor';
import { ButtonTypes } from '../../../../components/shared/Button/Button';
import Icons from '../../../../constants/Icons';
import PageTitles from '../../../../constants/PageTitles';
import { auth } from '../../../../helpers/firebase';
import { editBlog, getBlog, getBlogCategories, getBlogTitles, saveBlog } from '../../../../utils/Blog.utils';
import { BGImage, CloseButton, FileInput } from './EditBlog.styles';

function EditBlog() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { slug } = useParams();
  const [titles, setTitles] = useState<string[]>([]);
  const [valid, setValid] = useState<boolean | null>(null);
  const [originalTitle, setOriginalTitle] = useState('');
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();
  const [fileName, setFileName] = useState<string>();
  const [file, setFile] = useState<File>();
  const [imageURL, setImageURL] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [validation, setValidation] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const imageInputRef = useRef<HTMLInputElement | null>(null);
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
      getBlog({
        blogID: slug,
        setTitle,
        setBody,
        setImageURL,
        setCategories: setSelectedCategories,
        setOriginalTitle,
        setFileName,
      });
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
          if (title && user) {
            if (originalTitle.trim() === title.trim()) {
              saveBlog({
                title: title.trim(),
                body: body || '',
                categories: selectedCategories,
                navigate,
                message: 'blog updated',
                file,
                fileName: `images/${slug}/${file?.name}`,
                originalImageURL: imageURL,
                originalFileName: fileName,
                author: user.uid,
              });
            } else {
              editBlog({
                title,
                body: body || '',
                categories: selectedCategories,
                navigate,
                originalTitle,
                file,
                fileName: `images/${slug}/${file?.name}`,
                originalImageURL: imageURL,
                originalFileName: fileName,
                author: user.uid,
              });
            }
          }
        }}
        buttonType={ButtonTypes.submit}
        buttonText="Edit"
        disabled={validation}
        error={validation ? 'Blog already has this title!' : undefined}
        cancelClick={() => {
          navigate('/admin/blog');
        }}
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
          {imagePreview ? (
            <BGImage background={imagePreview}>
              <CloseButton
                aria-label="edit"
                onClick={() => {
                  if (imageInputRef && imageInputRef.current) {
                    imageInputRef.current.value = '';
                    setImagePreview('');
                  }
                }}
              >
                <CloseIcon fontSize="small" />
              </CloseButton>
            </BGImage>
          ) : (
            <BGImage background={imageURL} />
          )}
          <FileInput
            ref={imageInputRef}
            type="file"
            onChange={(e) => {
              const { files } = e.target;
              if (files && files[0].size < 2097152) {
                setFile(files[0]);
                const objectURL = URL.createObjectURL(files[0]);
                setImagePreview(objectURL);
              } else {
                alert('File size is too big');
                e.target.value = '';
              }
            }}
            accept="image/*"
          />
          <ReactQuillEditor value={body} onChange={setBody} />
          <FormControl fullWidth margin="normal">
            <InputLabel id="select-label">Categories</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              multiple
              defaultValue={selectedCategories || []}
              value={selectedCategories || []}
              onChange={handleChange}
              renderValue={(selected) => selected.join(', ')}
              label="Categories"
            >
              {categories.map((cat) => {
                if (cat !== 'all') {
                  return (
                    <MenuItem key={cat} value={cat}>
                      <Checkbox checked={selectedCategories?.indexOf(cat) > -1} />
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

export default EditBlog;
