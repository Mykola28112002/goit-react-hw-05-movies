import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 32px 32px;
  
  border-bottom: 1px solid black;
  > nav {
    display: flex;
  > a {
    font-size: 24px;
  }  
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: gold;
  }
`;