import { useGetMovieById } from "hooks";
import imageWoman from "assets/woman.png";
import imageMan from "assets/man.png";
import { Box, Card, ImgBx, Img, Details, Title, Desc } from "./Cast.styled";

export const Cast = () => {
  const { cast } = useGetMovieById();
  const base_url = "https://image.tmdb.org/t/p/w154";

  return (
    <Box>
      {cast.length !== 0 ? (
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
      ) : (
        "We don't have information about cast for this movie"
      )}
    </Box>
  );
};
