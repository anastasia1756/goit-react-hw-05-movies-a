import styled from "styled-components";
import { motion } from "framer-motion";

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
  flex-basis: calc((100% - 240px) / 4);

  &:hover {
    transform: scale(1.1);
    color: ${(props) => props.theme.colors.rgbPink};
  }
  @media (max-width: 768px) {
    flex-basis: unset;
  }
`;
export const Card = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.white};
  max-width: 200px;
  max-height: 360px;
`;
export const List = styled(motion.ul)`
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
