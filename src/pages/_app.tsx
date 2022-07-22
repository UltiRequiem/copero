import React from "react";
import { Router } from "next/router";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import NProgress from "nprogress";

import "../globals.css";
import "nprogress/nprogress.css";

import type { AppProps } from "next/app";
import Head from "next/head";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

export default function Copero({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Copero</title>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Head>

      <div>
        <div className="h-screen bg-slate-300">
          <Header />
          <Component {...pageProps} />
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
