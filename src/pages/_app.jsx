/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import CustomHead from '../componets/head';
import { Container, Footer, Header } from '../containers';
import { GlobalStyles } from '../styles';

import 'nprogress/nprogress.css';
import '../globals.css';

Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);

export default function Copero({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CustomHead />

      <Container>
        <Header />
        <Component {...pageProps} styles={{ 'grid-area': 'main' }} />
        <Footer />
      </Container>
    </>
  );
}
