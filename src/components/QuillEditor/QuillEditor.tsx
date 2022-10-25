import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IQuillProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

function ReactQuillEditor({ value, onChange }: IQuillProps) {
  return <ReactQuill theme="snow" value={value} onChange={onChange} />;
}

export default ReactQuillEditor;
