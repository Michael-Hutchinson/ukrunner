import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';

function RouteHandler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/race" element={<Race />} />
    <Route path="/training" element={<Training />} />
    <Route path="/events" element={<Events />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default RouteHandler;
