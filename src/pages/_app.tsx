import React from "react";
import { Router } from "next/router";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import NProgress from "nprogress";

import "../globals.css";
import "nprogress/nprogress.css";

import type { AppProps } from "next/app";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

export default function Copero({ Component, pageProps }: AppProps) {
  return (
    <>
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
