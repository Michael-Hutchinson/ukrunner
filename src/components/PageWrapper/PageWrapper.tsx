import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

interface IPageWrapperProps {
  title: string;
  children: ReactElement;
}

function PageWrapper({ title, children }: IPageWrapperProps): ReactElement {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default PageWrapper;
