/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import React from 'react';
import {
  Navbar, Container, Row, Col,
} from 'react-bootstrap';
import GlobalStyle from '../styles/globals.js';

export default function Copero({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Copero</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Copero</Navbar.Brand>
        <Navbar.Brand href="/list">Public Snippets</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Component {...pageProps} />
          </Col>
        </Row>
      </Container>
      <Navbar bg="dark" variant="dark" className="navbar fixed-bottom">
        <Navbar.Brand href="/">
          <p>© 2021 Eliaz Bobadilla (a.k.a UltiRequiem)</p>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
