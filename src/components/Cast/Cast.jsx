import { useGetMovieById } from "hooks";
import imageWoman from "assets/woman.png";
import imageMan from "assets/man.png";
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
  /* z-index: 1; */
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
  margin-top: -8px;
`;

export const Cast = () => {
  const { cast } = useGetMovieById();
  const base_url = "https://image.tmdb.org/t/p/w154";
  // return (
  //   <>
  //     <ul>
  //       {cast.map(({ id, profile_path, name, character, gender }) => (
  //         <li key={id}>
  //           <img
  //             src={
  //               profile_path
  //                 ? `${base_url}${profile_path}`
  //                 : gender === 1
  //                 ? imageWoman
  //                 : imageMan
  //             }
  //             alt={name}
  //           />
  //           <p>{name}</p>
  //           <p>Character: {character}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
  return (
    <Box>
      <ul>
        {cast.map(({ id, profile_path, name, character, gender }) => (
          <Card key={id}>
            <ImgBx>
              <Img
                src={
                  profile_path
                    ? `${base_url}${profile_path}`
                    : gender === 1
                    ? imageWoman
                    : imageMan
                }
                alt={name}
              />
            </ImgBx>
            <Details>
              <Title>
                {name}
                <br />
                <Desc>Character: {character}</Desc>
              </Title>
            </Details>
          </Card>
        ))}
      </ul>
    </Box>
  );
};

{
  /* <div
<div class="card">
  <div class="imgBx">
      <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images">
  </div>
  <div class="details">
      <h2>SomeOne Famous<br><span>Director</span></h2>
  </div>
</div> */
}
