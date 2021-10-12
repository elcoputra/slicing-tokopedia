import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.backgroundSecondaryVariant};
  border-style: solid;
  overflow: hidden;
`;
export const StyledInput = styled.input`
  border: none;
  height: 90%;
  width: calc(
    100% - 10px - ${({ rightButtonWidth }) => rightButtonWidth || "0px"}
  );
  background-color: transparent;
  margin-left: 10px;
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({theme}) => theme.colors.backgroundSecondaryVariant};
    opacity: 1; /* Firefox */
  }
  &:hover {
    border: none;
    outline: none;
    -webkit-appearance: none;
  }
  &:active {
    border: none;
    outline: none;
    -webkit-appearance: none;
  }
  &:focus {
    border: none;
    outline: none;
    -webkit-appearance: none;
  }
`;
