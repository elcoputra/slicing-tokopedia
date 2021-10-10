import React from "react";
import { render } from "@testing-library/react";
import { theme } from "@/styles/emotionTheme";
import PropTypes from "prop-types";
import { ThemeProvider } from "@emotion/react";

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

AllTheProviders.propTypes = {
  children: PropTypes.object,
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
