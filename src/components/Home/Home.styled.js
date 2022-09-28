import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Li = styled.li`
  color: ${p => p.theme.colors.mainBackground};
  font-size: ${p => p.theme.space[4]}px;
  width: ${p => p.theme.space[6]*6}px;
  &.active {
    color: orange;
  }
`;
export const A = styled(NavLink)`
  color: ${p => p.theme.colors.mainBackground};
  font-size: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  &.active {
    color: orange;
  }
`;
export const Ul = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 0;
  justify-content: center;
  padding: 0;
  gap: ${p => p.theme.space[4]}px;
  
`;
export const Div = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${p => p.theme.space[4]}px;
`;