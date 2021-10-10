import styled from "@emotion/styled";

export const Icon = styled.i`
  width: ${({ iconSize }) => iconSize.width}px;
  height: ${({ iconSize }) => iconSize.height}px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: ${({ iconPosition }) => iconPosition.x}%
    ${({ iconPosition }) => iconPosition.y}%;
  display: inline-block;
  margin-right: ${({ marginRight }) => marginRight}px;
`;
