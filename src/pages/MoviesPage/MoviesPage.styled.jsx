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

const glow = keyframes`
  0% {
  border-color: ${(props) => props.theme.colors.blue};
  box-shadow: 0 0 5px #00b7ff33, inset 0 0 5px #001aff19, 0 2px 0 #000;
  }	
  100% {
  border-color: ${(props) => props.theme.colors.lightBlue};
  box-shadow: 0 0 20px #00eeff99, inset 0 0 10px #0066ff66, 0 2px 0 #000;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  max-width: ${(props) => props.theme.spacing(100)};
  gap: ${(props) => props.theme.spacing(2)};
  color: #f1e2f2;
  &.active {
    color: ${(props) => props.theme.colors.pink};
  }
  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;
export const Img = styled.span`
  border-radius: 5px 5px 5px 5px;
  visibility: hidden;
  position: absolute;
  left: 350px;
  background: #fff;
  box-shadow: -2px 2px 10px -1px #333;
  border-radius: 5px;
  transition: transform ${(props) => props.theme.animation} ease;

  ${Link}:hover & {
    visibility: visible;
    transform: scale(0.8) rotate(-20deg);
  }

  @media (max-width: 768px) {
    left: 230px;
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
export const Form = styled.form`
  position: relative;
  margin-top: ${(props) => props.theme.spacing(2)};
  max-width: ${(props) => props.theme.spacing(40)};

  @media (max-width: 768px) {
    max-width: ${(props) => props.theme.spacing(80)};
  }
`;
export const Input = styled.input`
  animation: ${glow} 800ms ease-out infinite alternate;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.rgbPink};
  padding: ${(props) => props.theme.spacing(2)};
  width: 100%;
`;
export const Button = styled.button`
  background-color: transparent;
  border-radius: 50%;
  border: none;
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    transform: scale(1.3) translateY(-35%);
    background-color: ${(props) => props.theme.colors.purple};
  }
`;

export const LinkWrapper = styled.div`
  position: relative;
`;
