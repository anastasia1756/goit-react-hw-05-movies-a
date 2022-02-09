import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
const pulse = keyframes`
 	0%{box-shadow: 0 0 0 0 #ef6eae}
`;
export const Link = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.purple};
  &.active {
    color: ${(props) => props.theme.colors.pink};
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const Btn = styled.button`
  display: block;
  padding: ${(props) => props.theme.spacing(3)};
  margin: 20px 0 10px;
  color: ${(props) => props.theme.colors.purple};
  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2em #7f26867d;
    animation: ${pulse} 1s;
  }
`;
