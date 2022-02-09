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
  transition: color ${(props) => props.theme.animation} ease;
  &.active {
    color: ${(props) => props.theme.colors.pink};
  }

  &:hover {
    color: ${(props) => props.theme.colors.lightBlue};
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: line;
`;
export const GenresList = styled.ul`
  list-style: circle;
  font-size: 10px;
  margin-left: ${(props) => props.theme.spacing(3)};
`;
export const Btn = styled.button`
  gap: ${(props) => props.theme.spacing(1)};
  display: flex;
  padding: ${(props) => props.theme.spacing(3)};
  margin: 20px 0 10px;
  color: ${(props) => props.theme.colors.purple};
  background-color: transparent;
  border: 1px dotted ${(props) => props.theme.colors.purple};

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2em #7f26867d;
    animation: ${pulse} 1s;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  padding: 15px 0;
  border: 2px solid black;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`;
export const Overview = styled.p`
  font-size: ${(props) => props.theme.spacing(3)};
`;
export const Info = styled.div`
  text-align: center;
  font-weight: 700;
`;
