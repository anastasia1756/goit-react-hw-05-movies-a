import { useGetMovieById } from "hooks";
import imageWoman from "assets/woman.png";
import imageMan from "assets/man.png";
import { Box, Card, ImgBx, Img, Details, Title, Desc } from "./Cast.styled";
import PropTypes from "prop-types";

export const Cast = () => {
  const { cast } = useGetMovieById();
  const base_url = "https://image.tmdb.org/t/p/w154";
  const castInfo = cast.length !== 0;
  return (
    <Box>
      {castInfo ? (
        <ul>
          {cast.map(({ id, profile_path, name, character, gender }) => (
            <Card key={id}>
              <ImgBx>
                <ImgBx
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

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      gender: PropTypes.number,
    })
  ),
};
