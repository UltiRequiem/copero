import React from "react";
import { Router } from "next/router";

import NProgress from "nprogress";
import CustomHead from "../componets/head";

import "../globals.css";
import "nprogress/nprogress.css";

import type { AppProps } from "next/app";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

export default function Copero({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomHead />
      <Component {...pageProps} />
    </>
  );
}
