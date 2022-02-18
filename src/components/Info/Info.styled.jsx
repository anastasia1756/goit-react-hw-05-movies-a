import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AddInfo = styled.div`
  text-align: center;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;
export const Link = styled(NavLink)`
  margin-right: 10px;
  margin-top: ${(props) => props.theme.spacing(2)};

  text-decoration: none;
  font-weight: bold #530766b5;
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
export const Button = styled.button`
  width: 150px;
  font-size: 20px;
  background-color: transparent;
  padding: ${(props) => props.theme.spacing(1)};
  border: 1px dotted ${(props) => props.theme.colors.pink};
  color: ${(props) => props.theme.colors.darkPurple};
  transition: color ${(props) => props.theme.animation} ease;

  &:hover {
    color: ${(props) => props.theme.colors.lightBlue};
  }
`;
export const Wrapper = styled.div`
  background-color: #191919;
  padding: ${(props) => props.theme.spacing(3)};
`;
