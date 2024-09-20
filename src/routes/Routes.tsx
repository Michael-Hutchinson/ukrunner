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
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';
import Training from '../pages/Training/Training';

const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  return { user, loading, error };
};

interface AuthWrapperProps {
  requireAuth: boolean;
  redirectTo: string;
}

function AuthWrapper({ requireAuth, redirectTo }: Readonly<AuthWrapperProps>) {
  const { user, loading, error } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (requireAuth && !user) return <Navigate to={redirectTo} replace />;
  if (!requireAuth && user) return <Navigate to="/admin" replace />;

  return <Outlet />;
}

function RouteHandler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:slug" element={<SingleBlog />} />
      <Route path="profile/:slug" element={<Profile />} />
      <Route path="training" element={<Training />} />
      <Route path="contact" element={<Contact />} />

      <Route element={<AuthWrapper requireAuth={false} redirectTo="/admin" />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<AuthWrapper requireAuth redirectTo="/login" />}>
        <Route path="admin" element={<Admin />} />
        <Route path="admin/profile" element={<AdminProfile />} />
        <Route path="admin/blog" element={<AdminBlog />} />
        <Route path="admin/blog/create" element={<CreateBlog />} />
        <Route path="admin/blog/edit" element={<Navigate to="/admin/blog" />} />
        <Route path="admin/blog/edit/:slug" element={<EditBlog />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RouteHandler;
