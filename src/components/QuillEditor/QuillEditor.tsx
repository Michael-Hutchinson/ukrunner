import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IQuillProps {
  value: string | undefined;
  onChange: (value: string) => void;
  placeholder?: string;
}

function ReactQuillEditor({ value, onChange, placeholder }: IQuillProps) {
  return <ReactQuill theme="snow" value={value} onChange={onChange} placeholder={placeholder} />;
}

export default ReactQuillEditor;
