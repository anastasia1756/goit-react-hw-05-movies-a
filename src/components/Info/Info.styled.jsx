import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AddInfo = styled.div`
  text-align: center;
  font-weight: 700;
  color: ${(props) => props.theme.colors.darkPurple};
`;
export const Link = styled(NavLink)`
  margin-right: 10px;
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
