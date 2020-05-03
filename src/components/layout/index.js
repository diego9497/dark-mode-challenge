import React, { useContext, Children } from "react";
import Head from "next/head";
import { GlobalStyles } from "../../styles/GlobalStyles";
import Header from "../header";

import { ThemeProvider } from "styled-components";
import darkTheme from "../../themes/dark";
import lightTheme from "../../themes/light";

import { Context } from "../../ContextTheme";

const Layout = ({ children }) => {
  const { isDarkMode } = useContext(Context);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Header />
      {children}
    </ThemeProvider>
  );
};
export default Layout;
