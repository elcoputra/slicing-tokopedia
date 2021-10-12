import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 96%;
  left: 32px;
  display: flex;
  height: 56px;
  top: 30px;
  position: fixed;
  align-items: center;
  direction: ${({ direction }) => direction};
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

export const WrapperSearch = styled.div`
  width: 68%;
  display: flex;
  width: 63%;
  height: 56px;
  min-width: 150px;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
`;
