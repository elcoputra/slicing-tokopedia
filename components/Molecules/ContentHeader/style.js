import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  padding: 0px 32px;
  direction: ${({ direction }) => direction};
  position: fixed;
  top : 32px
`;

export const ContainerButtonCategory = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 1px 8px 0 10px;
`;

export const ContainerButtonBucket = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 0 21px;

`;
