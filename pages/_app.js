import App from "next/app";
import React from "react";
import Context from "../src/ContextTheme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Context.Provider>
        <Component {...pageProps} />
      </Context.Provider>
    );
  }
}
