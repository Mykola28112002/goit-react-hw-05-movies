import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`

  // display: flex;
   width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
`;

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
    background-color: orangered;
  }
`;