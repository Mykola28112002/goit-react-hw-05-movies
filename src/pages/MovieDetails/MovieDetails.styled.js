import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;
`;

export const Div = styled.div`
  display: flex;
`;
export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
`;
export const Info = styled.div`
  padding: ${p => p.theme.space[5]}px;
`;
export const A = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  
  border-radius: ${p => p.theme.space[2]}px;
  align-items: center;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
  text-decoration: none;
  border: 1px solid #000;
  &.active {
    background: gold;
    color: #fff;
    border: none;
  }
`;
export const Link = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  
  border-radius: ${p => p.theme.space[2]}px;
  align-items: center;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
  text-decoration: none;
  border: 1px solid #000;
  margin-bottom: ${p => p.theme.space[5]}px;
  display: inline-block;
  &.active {
    background: gold;
    color: #fff;
    border: none;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[6]}px;
`;