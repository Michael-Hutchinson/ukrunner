import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, Timestamp } from 'firebase/firestore';
import { NavigateFunction } from 'react-router-dom';

import { db } from '../helpers/firebase';
import { IBlog } from '../types/Blog.types';

export const saveBlog = (title: string, body: string, navigate: NavigateFunction, message: string) => {
  const splitTitle = title.toLowerCase().replaceAll(' ', '-');
  const docData = {
    title,
    body,
    date: Timestamp.fromDate(new Date()),
  };
  setDoc(doc(db, 'blog', splitTitle), docData).then(() => {
    navigate(`/admin/blog?success=true&message=${message}`);
  });
};

export const getBlogTitles = (setTitles: (titles: string[]) => void) => {
  getDocs(collection(db, 'blog')).then((response) => {
    const titles: string[] = [];
    response.forEach((docs) => {
      titles.push(docs.data().title.toLowerCase());
    });
    setTitles(titles);
  });
};

export const editBlog = (title: string, body: string, navigate: NavigateFunction, originalTitle: string) => {
  const newTitle = originalTitle.toLowerCase().replaceAll(' ', '-');
  saveBlog(title.trim(), body, navigate, 'blog edited');
  deleteDoc(doc(db, 'blog', newTitle));
};

export const getBlog = (
  blogID: string,
  setTitle: (title: string) => void,
  setBody: (body: string) => void,
  setOriginalTitle?: (originalTitle: string) => void,
  setDate?: (date: string) => void,
) => {
  const docRef = doc(db, 'blog', blogID);
  getDoc(docRef).then((response) => {
    if (response.data()) {
      const blogData = response.data();
      setTitle(blogData?.title);
      setBody(blogData?.body);
      if (setOriginalTitle) {
        setOriginalTitle(blogData?.title);
      }
      if (setDate) {
        setDate(blogData?.date);
      }
    }
  });
};

export const getBlogs = (setBlogs: (blog: IBlog[]) => void) => {
  getDocs(collection(db, 'blog')).then((response) => {
    const blogs: IBlog[] = [];
    response.forEach((blog) => {
      const singleBlog = blog.data();
      const blogData = {
        title: singleBlog?.title,
        body: singleBlog?.body,
        date: singleBlog?.date,
      };
      blogs.push(blogData);
    });
    setBlogs(blogs);
  });
};

export const deleteBlog = (
  title: string,
  setSuccessMessage: (message: string) => void,
  setSuccess: (success: boolean) => void,
) => {
  const alert = confirm('Are you sure you want to delete?');
  if (alert) {
    deleteDoc(doc(db, 'blog', title)).then(() => {
      setSuccessMessage('Blog post deleted');
      setSuccess(true);
    });
  }
};
