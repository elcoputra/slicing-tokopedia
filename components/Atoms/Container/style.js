import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  margin: 0 auto;
  max-width: ${({ maxWidth }) => maxWidth}rem;
  width: ${({ width }) => width};
`;
