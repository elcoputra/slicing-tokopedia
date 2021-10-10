import React from "react";
import { render, screen } from "@testing-library/react";
import { toHaveStyle } from "@testing-library/jest-dom";

import Container from "@/components/Atoms/Container";

describe("Testing components/Atoms/Container", () => {
  describe("Testing , children , maxWidth, width, direction", () => {
    test("must success", async () => {
      render(
        <Container maxWidth={20} width="50%" direction="row">
          <a data-testid="child">Testing</a>
        </Container>
      );
      const element = screen.getByTestId("Atoms/Container");
      expect(element).toHaveStyle({
        maxWidth: 20 + "rem",
      });
      expect(element).toHaveStyle({
        width: "50%",
      });
      expect(element).toHaveStyle({
        flexDirection: "row",
      });
      const child = screen.getByTestId("child");
      expect(child).toHaveTextContent(`Testing`);
    });
  });
});
