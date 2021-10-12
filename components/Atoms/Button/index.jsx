import React from "react";
import PropTypes from "prop-types";

import { ButtonDiv, ButtonRegular } from "@/components/Atoms/Button/style";

function Button({
  children,
  text,
  component = "button",
  borderRadius = "0px",
  height = "10px",
  width = "10x",
  margin = "1px 8px 0 10px",
  backgroundColor,
}) {
  return (
    <>
      {component === "button" ? (
        <ButtonRegular
          borderRadius={borderRadius}
          height={height}
          width={width}
          margin={margin}
          backgroundColor={backgroundColor}
        >
          {children || text}
        </ButtonRegular>
      ) : (
        component === "div" && (
          <ButtonDiv
            borderRadius={borderRadius}
            height={height}
            width={width}
            margin={margin}
            backgroundColor={backgroundColor}
          >
            {children || text}
          </ButtonDiv>
        )
      )}
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  component: PropTypes.string,
  borderRadius: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Button;
