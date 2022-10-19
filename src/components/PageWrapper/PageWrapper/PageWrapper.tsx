import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
