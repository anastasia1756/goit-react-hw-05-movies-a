import { useFetchMovies } from "hooks";
import { FaGratipay } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Title,
  List,
  Items,
  Card,
  Wrapper,
  Description,
} from "./HomePage.styled";

export const HomePage = () => {
  const { movies } = useFetchMovies();
  const base_url = "https://image.tmdb.org/t/p/w200";

  return (
    <>
      <Title>Popular movies today</Title>
      <List>
        {movies.map(({ title, id, poster_path }) => (
          <Items key={id}>
            <Card>
              <Link to={`/movies/${id}`}>
                <img
                  src={poster_path && `${base_url}${poster_path}`}
                  alt={title}
                />
                <Wrapper>
                  <FaGratipay />
                  <Description>{title}</Description>
                </Wrapper>
              </Link>
            </Card>
          </Items>
        ))}
      </List>
    </>
  );
};

HomePage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};
