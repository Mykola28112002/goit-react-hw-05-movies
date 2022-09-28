import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.mainBackground};
  font-size: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[3]}px;
  &.active {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.space[3]}px;
  }
`;

export const Nav = styled.nav`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;
