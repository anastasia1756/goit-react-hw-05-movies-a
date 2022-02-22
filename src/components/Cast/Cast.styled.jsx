import styled from "styled-components";

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 15px;
  margin: 0 auto;
`;

export const Card = styled.li`
  position: relative;
  width: 200px;
  height: 250px;
  background: #fff;
  margin: 45px auto;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: #fff;
    transition: 0.5s;
    z-index: -1;
  }

  &:hover:before {
    transform: rotate(20deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }

  &:hover:after {
    transform: rotate(10deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
`;
export const ImgBx = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  background: #222;
  transition: 0.5s;
  z-index: 1;

  &:hover {
    bottom: 80px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;
export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Details = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 60px;
  text-align: center;
`;
export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 15px;
  color: ${(props) => props.theme.colors.purple};
  text-transform: uppercase;
`;
export const Desc = styled.span`
  font-weight: 500;
  font-size: 10px;
  color: ${(props) => props.theme.colors.pink};
  display: block;
  margin-top: -4px;
`;
