import React from "react";
import { render, screen } from "@testing-library/react";
import { toHaveStyle, toContainElement } from "@testing-library/jest-dom";

import AtomImage from "@/components/Atoms/Image";

describe("Testing components/Atoms/Image", () => {
  //   test("Image Regular", async () => {});
  test("Floating Image Have Container", async () => {
    render(
      <AtomImage
        dataTestId={{ container: "Floating", nextImage: "Floating" }}
        withContainer
        imagePath="/assets/images/floating-icon6.gif"
        zIndex={50}
        size="sm"
        floating={{ position: "rb" }}
        alt="float-image-kotak-hadiah"
      />
    );
    const container = screen.getByTestId("container-Floating");
    const image = screen.getByTestId("Next/Image-Floating");

    expect(container).toContainElement(image);
  });

  test("Floating Image Size", async () => {
    const size = [
      { size: "sm", x: `100px`, y: `100px` },
      { size: "md", x: `200px`, y: `200px` },
      { size: "lg", x: `300px`, y: `300px` },
      { size: "xl", x: `400px`, y: `400px` },
      { size: { x: 5, y: 5 }, x: `5px`, y: `5px` },
      { x: `100px`, y: `100px` },
    ];

    size.map((data) => {
      render(
        <AtomImage
          dataTestId={{
            container: `Floating-${data.size}`,
          }}
          withContainer
          imagePath="/assets/images/floating-icon6.gif"
          zIndex={50}
          size={data.size}
          floating={{ position: "rb" }}
          alt="float-image-kotak-hadiah"
        />
      );
      const container = screen.getByTestId(`container-Floating-${data.size}`);

      expect(container).toHaveStyle({
        width: `${data.x}`,
        height: `${data.x}`,
      });
    });
  });

  test("Floating Image Position", async () => {
    const position = [
      { position: "lt", l: "70px", r: "unset", t: "150px", b: "unset" },
      { position: "lb", l: "70px", r: "unset", t: "unset", b: "100px" },
      { position: "rt", l: "unset", r: "70px", t: "150px", b: "unset" },
      { position: "rb", l: "unset", r: "70px", t: "unset", b: "100px" },
      { position: "empty", l: "unset", r: "70px", t: "unset", b: "100px" },
    ];

    position.map((data) => {
      render(
        <AtomImage
          dataTestId={{
            container: `Floating-${data.position}`,
          }}
          withContainer
          imagePath="/assets/images/floating-icon6.gif"
          zIndex={50}
          size="sm"
          floating={{ position: data.position }}
          alt="float-image-kotak-hadiah"
        />
      );
      const container = screen.getByTestId(
        `container-Floating-${data.position}`
      );

      expect(container).toHaveStyle({
        top: data.t,
        bottom: data.b,
        left: data.l,
        right: data.r,
      });
    });
  });
});
