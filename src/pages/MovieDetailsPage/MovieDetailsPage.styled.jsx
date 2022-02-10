import styled, { keyframes } from "styled-components";
const pulse = keyframes`
 	0%{box-shadow: 0 0 0 0 #ef6eae}
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

  @media (max-width: 768px) {
    display: block;
    max-width: 320px;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const Overview = styled.div`
  font-size: ${(props) => props.theme.spacing(3)};
  font-style: italic;
`;

export const About = styled.p`
  font-weight: 700;
`;
export const Genres = styled.div`
  font-weight: 700;
`;
export const Votes = styled.span`
  color: ${(props) => props.theme.colors.darkPurple};
  font-weight: 700;
  font-style: italic;
`;
