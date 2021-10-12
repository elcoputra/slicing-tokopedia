import React from "react";
import PropTypes from "prop-types";

import { Wrapper, StyledInput } from "@/components/Atoms/Input/style";

function AtomInput({
  wrapperWidth = "100%",
  wrapperHeight = "32px",
  WrapperBorderRadius = "8px",
  placeHolder = "Beli Duit",
  rightButton,
}) {
  return (
    <Wrapper
      width={wrapperWidth}
      height={wrapperHeight}
      borderRadius={WrapperBorderRadius}
      rightButtonWidth={rightButton?.width}
    >
      <StyledInput placeholder={placeHolder} />
      {rightButton && rightButton.component}
    </Wrapper>
  );
}
AtomInput.propTypes = {
  wrapperWidth: PropTypes.string,
  wrapperHeight: PropTypes.string,
  WrapperBorderRadius: PropTypes.string,
  placeHolder: PropTypes.string,
  rightButton: PropTypes.shape({
    width: PropTypes.string,
    component: PropTypes.element,
  }),
};
export default AtomInput;
