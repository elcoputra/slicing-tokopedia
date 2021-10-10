import "styles/globals.css";
import { theme } from "@/styles/emotionTheme";
import PropTypes from "prop-types";

import {ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
