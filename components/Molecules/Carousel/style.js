import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const navStyleRoot = css`
  display: flex;
  opacity: 0;
  position: absolute;
  top: 50%;
  bottom: 50%;
  border-radius: 25px;
  background-color: #fff;
  height: 40px;
  width: 40px;
  z-index: 1;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);
  cursor: pointer;
  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.2, 0.64, 0.21, 1);
  &:hover {
    height: 44px;
    width: 44px;
  }
`;

const navStyleOtherHover = css`
  opacity: 1;
`;

export const PrevContainer = styled.div`
  ${navStyleRoot}
  left: 10px;
`;

export const NextContainer = styled.div`
  ${navStyleRoot}
  right: 10px;
`;

export const WrapperCarouse = styled.div`
  display: block;
  position: relative;
  flex-direction: column;
  margin: 24px 0px;
  &:hover ${PrevContainer} {
    ${navStyleOtherHover}
    left: -20px;
  }
  &:hover ${NextContainer} {
    ${navStyleOtherHover}
    right: -20px;
  }
`;

export const PagingDotContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: "row";
  z-index: 1;
  bottom: 15px;
  padding: 0px 20px;
`;

export const PagingDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  transform: scale(1);
  transition: transform 0.3s ease 0s, background-color 0.3s ease 0s;
  border-radius: 4px;
  margin-right: 4px;
  background-color: rgba(255, 255, 255, 0.44);
  position: relative;
`;
export const MorePromoContainer = styled.span`
  position: absolute;
  display: flex;
  flex: 0 0 auto;
  padding: 4px;
  bottom: 8px;
  z-index: 1;
  right: 10px;
  background-color: rgba(49, 53, 59, 0.96);
  font-size: 10px;
  color: white;
  border-radius: 4px;
`;
