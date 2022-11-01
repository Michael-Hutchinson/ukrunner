import 'react-quill/dist/quill.snow.css';

import React from 'react';
import ReactQuill from 'react-quill';

interface IQuillProps {
  value: string | undefined;
  onChange: (value: string) => void;
  placeholder?: string;
}

function ReactQuillEditor({ value, onChange, placeholder }: IQuillProps) {
  const modules = {
    toolbar: [[{ header: [2, 3, false] }], ['bold', 'italic', 'underline', 'blockquote'], ['link', 'image'], ['clean']],
  };
  return <ReactQuill theme="snow" value={value} onChange={onChange} modules={modules} placeholder={placeholder} />;
}

export default ReactQuillEditor;
