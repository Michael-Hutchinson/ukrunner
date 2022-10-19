import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import Race from '../pages/Race/Race';
import Training from '../pages/Training/Training';
import Events from '../pages/Events/Events';
import Shop from '../pages/Shop/Shop';
import Contact from '../pages/Contact/Contact';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

function RouteHandler() {
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
    </Routes>
  );
}

export default RouteHandler;
