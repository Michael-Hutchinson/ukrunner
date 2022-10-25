import { doc, setDoc, Timestamp, collection, getDocs, deleteDoc, getDoc } from 'firebase/firestore';
import { NavigateFunction } from 'react-router-dom';
import { db } from '../../helpers/firebase';
import { IBlog } from '../../types/Blog.types';

export const saveBlog = (title: string, body: string, navigate: NavigateFunction, message: string) => {
  const splitTitle = title.replaceAll(' ', '-');
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
  saveBlog(title, body, navigate, 'blog edited');
  deleteDoc(doc(db, 'blog', originalTitle));
};

export const getBlog = (
  blogID: string,
  setBlog: (blog: IBlog) => void,
  setOriginalTitle: (originalTitle: string) => void,
) => {
  const docRef = doc(db, 'blog', blogID);
  getDoc(docRef).then((response) => {
    if (response.data()) {
      const blogData = response.data();
      const blog = {
        title: blogData?.title,
        body: blogData?.body,
        date: blogData?.date,
      };
      setBlog(blog);
      setOriginalTitle(blogData?.title);
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
