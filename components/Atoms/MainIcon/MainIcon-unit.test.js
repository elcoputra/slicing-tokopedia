import React from "react";
import { render, screen } from "@testing-library/react";
import { toHaveStyle } from "@testing-library/jest-dom";

import MainIcon from "@/components/Atoms/MainIcon";

describe("Testing components/Atoms/MainIcon", () => {
  describe("Testing icon (bucket, mail, bel, phone, gear, arrowDown)", () => {
    test("must success", async () => {
      const icons = [
        { icon: "bucket", position: { x: 0, y: 0 } },
        { icon: "mail", position: { x: 20, y: 20 } },
        { icon: "bel", position: { x: 40, y: 40 } },
        { icon: "phone", position: { x: 60, y: 60 } },
        { icon: "gear", position: { x: 80, y: 80 } },
        { icon: "arrowDown", position: { x: 100, y: 100 } },
        { icon: null, position: { x: 0, y: 0 } },
      ];
      icons.map((item, index) => {
        render(<MainIcon icon={item.icon} size="sm" />);
        const element = screen.getByTestId(
          "MainIcon-" + item.icon + "-" + "sm"
        );
        expect(element).toHaveStyle(
          `background-position: ${item.position.x}% ${item.position.y}%`
        );
      });
    });
  });
  describe("Testing size (sm,md,lg,xl)", () => {
    test("must success", async () => {
      const size = [
        { size: "sm", width: 20, height: 20 },
        { size: "md", width: 35, height: 35 },
        { size: "lg", width: 60, height: 60 },
        { size: "xl", width: 100, height: 100 },
        { size: null, width: 20, height: 20 },
      ];
      size.map((item, index) => {
        render(<MainIcon icon="bucket" size={item.size} />);
        const element = screen.getByTestId(
          "MainIcon-" + "bucket" + "-" + item.size
        );
        expect(element).toHaveStyle({
          width: item.width + "px",
          height: item.height + "px",
        });
      });
      render(<MainIcon icon="bucket" size={{ x: 20, y: 20 }} />);
      const element = screen.getByTestId(
        "MainIcon-" + "bucket" + "-" + { x: 20, y: 20 }
      );
      expect(element).toHaveStyle({
        width: "20px",
        height: "20px",
      });
    });
  });
});
