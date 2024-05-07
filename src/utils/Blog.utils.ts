import { collection, deleteDoc, doc, getDoc, getDocs, limit, query, setDoc, Timestamp } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { db, storage } from '../helpers/firebase';
import { IBlog, IEditBlog, ISaveBlog } from '../types/Blog.types';
import { getUser } from './Users.utils';

export const saveBlog = async ({
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
  const docData: IBlog = {
    title,
    body,
    categories,
    date: Timestamp.fromDate(new Date()),
    author,
    fileName: file ? fileName : originalFileName,
    image: originalImageURL,
  };

  if (file && fileName) {
    const blogImageRef = ref(storage, fileName);
    await uploadBytes(blogImageRef, file);
    const imageURL = await getDownloadURL(blogImageRef);
    docData.image = imageURL;

    if (originalFileName && originalImageURL) {
      const deleteRef = ref(storage, originalFileName);
      await deleteObject(deleteRef);
    }
  }

  await setDoc(doc(db, 'blog', splitTitle), docData);
  navigate(`/admin/blog?success=true&message=${message}`);
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

interface GetBlogParams {
  blogID: string;
  setTitle: (title: string) => void;
  setBody: (body: string) => void;
  setImageURL?: (imageURL: string) => void;
  setCategories?: (categories: string[]) => void;
  setOriginalTitle?: (originalTitle: string) => void;
  setFileName?: (fileName: string) => void;
  setDate?: (date: Timestamp) => void;
  setAuthor?: (author: string) => void;
  setFirstName?: (firstName: string) => void;
  setSurname?: (surname: string) => void;
}

export const getBlog = ({
  blogID,
  setTitle,
  setBody,
  setImageURL,
  setCategories,
  setOriginalTitle,
  setFileName,
  setDate,
  setAuthor,
  setFirstName,
  setSurname,
}: GetBlogParams) => {
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
        getUser({ userID: blogData?.author, setFirstName, setSurname });
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

export const getBlogsByAuthor = (setBlogs: (blog: IBlog[]) => void, authorID: string) => {
  getDocs(collection(db, 'blog')).then(async (response) => {
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
    const filterBlogs = blogs.filter((thisBlog) => thisBlog.author === authorID);
    setBlogs(filterBlogs);
  });
};

export const getHomepageBlogs = (setBlogs: (blog: IBlog[]) => void) => {
  const limitBlogs = query(collection(db, 'blog'), limit(3));
  getDocs(limitBlogs).then((response) => {
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
