import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NextImage from "next/image";

import { ImageContainer } from "@/components/Atoms/Image/style";

function Image({
  imagePath,
  alt,
  floating,
  size,
  layout,
  withContainer,
  borderradius,
  unit,
  position = "fixed",
  zIndex = 50,
  dataTestId = { container: "", nextImage: "" },
  href = "",
  ...allAttribute
}) {
  const [sizeState, setSizeState] = useState({ x: "100px", y: "100px" });
  const [precision, setPrecision] = useState({
    l: "unset",
    r: "unset",
    t: "unset",
    b: "unset",
  });

  useEffect(() => {
    switch (size) {
      case "sm":
        setSizeState({ x: `100${unit || "px"}`, y: `100${unit || "px"}` });
        break;
      case "md":
        setSizeState({ x: `200${unit || "px"}`, y: `200${unit || "px"}` });
        break;
      case "lg":
        setSizeState({ x: `300${unit || "px"}`, y: `300${unit || "px"}` });
        break;
      case "xl":
        setSizeState({ x: `400${unit || "px"}`, y: `400${unit || "px"}` });
        break;
      default:
        if (size?.x && size?.y) {
          setSizeState({
            x: `${size.x}${unit || "px"}`,
            y: `${size.y}${unit || "px"}`,
          });
        } else {
          setSizeState({ x: `100${unit || "px"}`, y: `100${unit || "px"}` });
        }
        break;
    }
  }, [size, unit]);

  useEffect(() => {
    if (floating || floating?.position) {
      setPrecision({
        l: "unset",
        r: "unset",
        t: "unset",
        b: "unset",
      });
      switch (floating?.position) {
        case "lt":
          setPrecision((prev) => ({ ...prev, l: "70px", t: "150px" }));
          break;
        case "lb":
          setPrecision((prev) => ({ ...prev, l: "70px", b: "100px" }));
          break;
        case "rt":
          setPrecision((prev) => ({ ...prev, r: "70px", t: "150px" }));
          break;
        case "rb":
          setPrecision((prev) => ({ ...prev, r: "70px", b: "100px" }));
          break;
        default:
          setPrecision((prev) => ({ ...prev, r: "70px", b: "100px" }));
          break;
      }
    }
  }, [floating]);

  return (
    <>
      {withContainer ? (
        <ImageContainer
          data-testid={`container-${dataTestId.container}`}
          position={position || "fixed"}
          zIndex={zIndex || "unset"}
          left={precision.l || "unset"}
          right={precision.r || "unset"}
          top={precision.t || "unset"}
          bottom={precision.b || "unset"}
          borderradius={borderradius}
          width={sizeState.x}
          height={sizeState.y}
          href={href}
          {...allAttribute}
        >
          <NextImage
            data-testid={`Next/Image-${dataTestId.nextImage}`}
            src={imagePath}
            alt={alt}
            layout={layout || "fill"}
            borderradius={borderradius}
          />
        </ImageContainer>
      ) : (
        <NextImage
          src={imagePath}
          alt={alt}
          layout={layout || "fill"}
          borderradius={borderradius}
          {...allAttribute}
        />
      )}
    </>
  );
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  floating: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      position: PropTypes.oneOfType([
        PropTypes.oneOf(["lt", "lb", "rt", "rb"]),
        PropTypes.string,
      ]),
    }),
  ]),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
  ]),
  layout: PropTypes.string,
  borderradius: PropTypes.number,
  withContainer: PropTypes.bool,
  unit: PropTypes.string,
  position: PropTypes.string,
  href: PropTypes.string,
  zIndex: PropTypes.number,
  dataTestId: PropTypes.shape({
    container: PropTypes.string,
    nextImage: PropTypes.string,
  }),
};

export default Image;

/*
Layout : https://nextjs.org/docs/api-reference/next/image#layout
*/
