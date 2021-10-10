import styled from "@emotion/styled";

export const StyledLink = styled.a`
  display: flex;
  color: ${(props) => props.theme.colors.textSecondary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 12px;
  line-height: 31px;
  cursor: pointer;
  flex-wrap: nowrap;
  white-space: nowrap;
  align-items: center;
  transition: color 200ms ease;
  text-decoration: none;
  background-color: transparent;
  margin-right: ${({ marginRight }) => marginRight}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  &:hover {
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;
