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
}) {
  return (
    <>
      {component === "button" ? (
        <ButtonRegular
          borderRadius={borderRadius}
          height={height}
          width={width}
        >
          {children || text}
        </ButtonRegular>
      ) : (
        component === "div" && (
          <ButtonDiv borderRadius={borderRadius} height={height} width={width}>
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
};

export default Button;
