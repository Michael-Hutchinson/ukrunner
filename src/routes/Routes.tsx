import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { User } from 'firebase/auth';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import Race from '../pages/Race/Race';
import Training from '../pages/Training/Training';
import Events from '../pages/Events/Events';
import Shop from '../pages/Shop/Shop';
import Contact from '../pages/Contact/Contact';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Login from '../pages/Login/Login';
import { auth } from '../helpers/firebase';
import Admin from '../pages/Admin/Admin';

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
      </Route>
    </Routes>
  );
}

export default RouteHandler;
