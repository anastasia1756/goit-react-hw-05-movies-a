import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #f1e2f2;
  &.active {
    color: ${(props) => props.theme.colors.pink};
  }
`;

export const Wrapper = styled.div`
  background: linear-gradient(195deg, #d81dc1, #3d0346, #c92be1);
  background-size: 180% 180%;
  animation: ${gradient} 3s ease infinite;
  height: ${(props) => props.theme.spacing(300)};
  margin: -12px;
  padding: 4px 12px;
`;
export const Icon = styled(MdLocalMovies)`
  margin-right: ${(props) => props.theme.spacing(2)};
`;
