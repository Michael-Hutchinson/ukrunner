import { Timestamp } from 'firebase/firestore';
import { NavigateFunction } from 'react-router-dom';

declare global {
  export interface Date {
    toDate: () => Date;
  }
}

export interface IBlog {
  title: string;
  body: string;
  date: Timestamp;
  categories: string[];
  author: string;
  image?: string;
  fileName?: string;
  authorName?: string;
}

type BlogProps = {
  title: string;
  body: string;
  categories: string[];
  navigate: NavigateFunction;
  author: string;
  file?: File;
  fileName?: string;
  originalImageURL?: string;
  originalFileName?: string;
};

export interface IEditBlog extends BlogProps {
  originalTitle: string;
}

export interface ISaveBlog extends BlogProps {
  message: string;
}
