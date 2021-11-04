/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import CustomHead from '../componets/head';
import { GlobalStyles } from '../styles';

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
