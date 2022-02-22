import styled, { keyframes } from "styled-components";
const pulse = keyframes`
 	0%{box-shadow: 0 0 0 0 #ef6eae}
`;

export const Btn = styled.button`
  gap: ${(props) => props.theme.spacing(1)};

  padding: ${(props) => props.theme.spacing(3)};
  margin-left: 30px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.darkPurple};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.darkPurple};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1em #7f26867d;
    animation: ${pulse} 1s;
  }
  ${(props) =>
    props.active &&
    `
    color: #ee8dee;
    background-color: #530766b5;
  `}
`;
