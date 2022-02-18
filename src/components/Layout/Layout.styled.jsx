import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bg from "assets/image.jpeg";

export const Link = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
  color: #331333;
  &.active {
    color: #aa27aa;
  }
`;
export const Wrapper = styled.div`
  padding: 12px;
`;
export const Header = styled.div`
  background-color: ${(props) => props.theme.colors.rgbPink};
  margin: -12px;
  padding: ${(props) => props.theme.spacing(3)};
`;
