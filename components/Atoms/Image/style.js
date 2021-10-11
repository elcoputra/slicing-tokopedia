import styled from "@emotion/styled";

export const ImageContainer = styled.a`
  cursor: pointer;
  text-decoration: none;
  position: ${({ position }) => position};
  z-index: ${({ zIndex }) => zIndex};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  border-radius: ${({ borderradius }) => borderradius};
  width: ${({ width }) => width};
  height: ${({ height }) => height}; ;
`;
