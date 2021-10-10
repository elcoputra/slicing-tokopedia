import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  margin-left: ${({ marginLeftWrapper }) => marginLeftWrapper};
  width: ${({ width }) => width}px;
  justify-content: ${({ justifyContent }) => justifyContent};
`;
