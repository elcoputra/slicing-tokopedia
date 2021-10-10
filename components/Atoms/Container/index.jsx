import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "@/components/Atoms/Container/style";

function Container({
  children,
  maxWidth = 0,
  width = "100%",
  direction = "column",
}) {
  return (
    <Wrapper
      data-testid={"Atoms/Container"}
      id="container-wrapper"
      maxWidth={maxWidth}
      width={width}
      direction={direction}
    >
      {children}
    </Wrapper>
  );
}

Container.propTypes = {
  children: PropTypes.element,
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["none"])]),
  width: PropTypes.string,
  direction: PropTypes.string,
};

export default Container;
