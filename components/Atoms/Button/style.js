import styled from "@emotion/styled";

export const ButtonRegular = styled.button``;

export const ButtonDiv = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
  line-height: 1.5;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: color 280ms ease;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  margin: ${({ margin }) => margin};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) => backgroundColor};
  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`;
