import React from "react";
import { render, screen } from "test-utils";
import { toHaveStyle, toHaveTextContent } from "@testing-library/jest-dom";

import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/emotionTheme";

import Link from "@/components/Atoms/Link";

describe("Testing components/Atoms/Link", () => {
  test("must success", async () => {
    render(
      <Link text="asd" href="this/is/link" marginLeft={5} marginRight={5} />
    );

    const StyledLink = screen.getByTestId("StyledLink");

    expect(StyledLink).toHaveTextContent("asd");
    expect(StyledLink).toHaveAttribute("href", "this/is/link");
    expect(StyledLink).toHaveStyle({
      marginLeft: 5 + "px",
    });
    expect(StyledLink).toHaveStyle({
      marginRight: 5 + "px",
    });
  });
});
