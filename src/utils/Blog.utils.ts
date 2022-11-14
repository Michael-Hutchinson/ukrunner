import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, Timestamp } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { db, storage } from '../helpers/firebase';
import { IBlog, IEditBlog, ISaveBlog } from '../types/Blog.types';
import { getUser } from './Users.utils';

export const saveBlog = ({
  title,
  body,
  categories,
  navigate,
  message,
  author,
  file,
  fileName,
  originalImageURL,
  originalFileName,
}: ISaveBlog) => {
  const splitTitle = title.toLowerCase().replaceAll(' ', '-');
  let docData: IBlog = {
    title,
    body,
    categories,
    date: Timestamp.fromDate(new Date()),
    author,
  };
  if (file && fileName) {
    const blogImageRef = ref(storage, fileName);
    uploadBytes(blogImageRef, file).then(() => {
      getDownloadURL(blogImageRef).then((imageURL) => {
        docData = {
          ...docData,
          fileName,
          image: imageURL,
        };
        if (originalFileName && originalImageURL) {
          const deleteRef = ref(storage, originalFileName);
          deleteObject(deleteRef);
        }
        setDoc(doc(db, 'blog', splitTitle), docData).then(() => {
          navigate(`/admin/blog?success=true&message=${message}`);
        });
      });
    });
  } else {
    docData = {
      title,
      body,
      categories,
      date: Timestamp.fromDate(new Date()),
      author,
      fileName: originalFileName,
      image: originalImageURL,
    };
    setDoc(doc(db, 'blog', splitTitle), docData).then(() => {
      navigate(`/admin/blog?success=true&message=${message}`);
    });
  }
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

export const editBlog = ({
  title,
  body,
  categories,
  navigate,
  originalTitle,
  file,
  fileName,
  originalImageURL,
  originalFileName,
  author,
}: IEditBlog) => {
  const newTitle = originalTitle?.toLowerCase().replaceAll(' ', '-');
  saveBlog({
    title: title.trim(),
    body,
    categories,
    navigate,
    message: 'blog edited',
    file,
    fileName,
    originalImageURL,
    originalFileName,
    author,
  });
  deleteDoc(doc(db, 'blog', newTitle));
};

export const getBlog = (
  blogID: string,
  setTitle: (title: string) => void,
  setBody: (body: string) => void,
  setImageURL?: (imageURL: string) => void,
  setCategories?: (categories: string[]) => void,
  setOriginalTitle?: (originalTitle: string) => void,
  setFileName?: (fileName: string) => void,
  setDate?: (date: Timestamp) => void,
  setAuthor?: (author: string) => void,
  setFirstName?: (firstName: string) => void,
  setSurname?: (surname: string) => void,
) => {
  const docRef = doc(db, 'blog', blogID);
  getDoc(docRef).then((response) => {
    if (response.data()) {
      const blogData = response.data();
      setTitle(blogData?.title);
      setBody(blogData?.body);
      if (setImageURL) {
        setImageURL(blogData?.image);
      }
      if (setCategories) {
        setCategories(blogData?.categories);
      }
      if (setOriginalTitle) {
        setOriginalTitle(blogData?.title);
      }
      if (setFileName) {
        setFileName(blogData?.fileName);
      }
      if (setDate) {
        setDate(blogData?.date);
      }
      if (setAuthor) {
        getUser(blogData?.author, setFirstName, setSurname);
        setAuthor(blogData?.author);
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
        categories: singleBlog?.categories,
        image: singleBlog?.image,
        fileName: singleBlog?.fileName,
        author: singleBlog?.author,
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
  fileName?: string,
) => {
  const alert = confirm('Are you sure you want to delete?');
  if (alert) {
    deleteDoc(doc(db, 'blog', title)).then(() => {
      setSuccessMessage('Blog post deleted');
      setSuccess(true);
    });
    if (fileName) {
      const deleteRef = ref(storage, fileName);
      deleteObject(deleteRef);
    }
  }
};

export const getBlogCategories = (setCategories: (categories: string[]) => void) => {
  getDoc(doc(db, 'blog_options', 'categories')).then((response) => {
    const categories: string[] = response.data()?.categories;
    setCategories(categories);
  });
};
