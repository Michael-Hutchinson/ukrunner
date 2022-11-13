import { User } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { auth } from '../helpers/firebase';
import About from '../pages/About/About';
import Admin from '../pages/Admin/Admin';
import AdminBlog from '../pages/Admin/Blog/AdminBlog';
import CreateBlog from '../pages/Admin/Blog/CreateBlog/CreateBlog';
import EditBlog from '../pages/Admin/Blog/EditBlog/EditBlog';
import AdminProfile from '../pages/Admin/Profile/AdminProfile';
import Blog from '../pages/Blog/Blog';
import SingleBlog from '../pages/Blog/SingleBlog/SingleBlog';
import Contact from '../pages/Contact/Contact';
import Events from '../pages/Events/Events';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Race from '../pages/Race/Race';
import Shop from '../pages/Shop/Shop';
import Training from '../pages/Training/Training';

interface Error {
  cause?: unknown;
}

interface WrapperProps {
  user: User | null | undefined;
  loading: boolean;
  error: Error | undefined;
}

function PrivateWrapper({ user, loading, error }: WrapperProps) {
  if (loading) {
    return <p>Loading</p>;
  }
  if (user && !loading && !error) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
}

function ProtectedWrapper({ user, loading, error }: WrapperProps) {
  if (loading) {
    return <p>Loading</p>;
  }
  if (user && !loading && !error) {
    return <Navigate to="/admin" />;
  }
  return <Outlet />;
}

function RouteHandler() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<SingleBlog />} />
      <Route path="/race" element={<Race />} />
      <Route path="/training" element={<Training />} />
      <Route path="/events" element={<Events />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
      <Route element={<ProtectedWrapper user={user} loading={loading} error={error} />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateWrapper user={user} loading={loading} error={error} />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/blog" element={<AdminBlog />} />
        <Route path="/admin/blog/create" element={<CreateBlog />} />
        <Route path="/admin/blog/edit" element={<Navigate to="/admin/blog" />} />
        <Route path="/admin/blog/edit/:slug" element={<EditBlog />} />
      </Route>
    </Routes>
  );
}

export default RouteHandler;
