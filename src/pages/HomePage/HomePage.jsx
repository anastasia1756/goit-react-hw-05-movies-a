import { useFetchMovies } from "hooks";
import { Link } from "react-router-dom";
import { FaGratipay } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

export const Links = styled(Link)`
  margin-left: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.colors.purple};
`;
export const List = styled.li`
  display: flex;
  align-items: center;
`;
export const HomePage = () => {
  const { movies, loading, error } = useFetchMovies();

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ title, id }) => (
          <List key={id}>
            <FaGratipay />
            <Links to={`/movies/${id}`}>{title}</Links>
          </List>
        ))}
      </ul>
    </>
  );
};
