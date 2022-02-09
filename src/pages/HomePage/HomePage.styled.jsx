import styled from "styled-components";

export const Description = styled.div`
  margin-left: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.colors.purple};
  font-size: 10px;
  font-weight: 700;
`;
export const Items = styled.li`
  display: flex;
  align-items: center;
  transition: transform ${(props) => props.theme.animation} ease;

  &:hover {
    transform: scale(1.1);
    color: ${(props) => props.theme.colors.rgbPink};
  }
`;
export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  max-width: 200px;
  max-height: 360px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-evenly;
`;
export const Title = styled.h2`
  margin: ${(props) => props.theme.spacing(4)};
`;
export const Wrapper = styled.div`
  display: flex;
  margin: ${(props) => props.theme.spacing(3)};
`;
