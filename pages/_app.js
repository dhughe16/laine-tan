import "../styles/globals.css";
import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../styles/theme";
import "@fontsource/montserrat";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
