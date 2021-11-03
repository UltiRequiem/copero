/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import CustomHead from './head.jsx';
import GlobalStyles from '../styles/globals.js';

export default function Copero({ Component, pageProps }) {
  return (
    <>
      {/* Metadata and Styles */}
      <GlobalStyles />
      <CustomHead />

      {/* Layout */}
      <Component {...pageProps} />
    </>
  );
}
