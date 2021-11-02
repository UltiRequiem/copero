/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from 'next/head';

import React from 'react';
import {
  Navbar, Container, Row, Col,
} from 'react-bootstrap';

export default function Copero({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Copero</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/"> &nbsp; Copero</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Component {...pageProps} />
          </Col>
        </Row>
      </Container>
      <Navbar bg="dark" variant="dark" className="mt-4">
        <Navbar.Brand href="/"> &nbsp; © 2021 UltiRequiem </Navbar.Brand>
      </Navbar>
    </div>
  );
}
