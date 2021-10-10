import React from "react";
import { render } from "@testing-library/react";

import MainIcon from "@/components/Atoms/MainIcon";

describe("Testing atom mainIcon Component", () => {
  test("Testing icon (bucket, mail, bel, phone, gear, arrowDown)", async () => {
    render(<MainIcon />);
  });
  test("Testing size (sm,md,lg,xl)", async () => {});
  test("Testing margin right", async () => {});
});
