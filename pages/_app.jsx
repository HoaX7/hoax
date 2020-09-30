import App from "next/app";
import "../public/css/index.css";
import React, { Fragment } from "react";
import withReact from "../store/withReact";

class Portfolio extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps,
    };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Component {...pageProps} />
        <div id="modal-root" />
      </Fragment>
    );
  }
}

export default withReact(Portfolio);
