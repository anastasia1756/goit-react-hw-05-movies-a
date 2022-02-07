import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useGetMovieById } from "../../hooks";

const Link = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
  color: #331333;
  &.active {
    color: #aa27aa;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const MovieDetailsPage = () => {
  const { movie, loading, error, cast, reviews, genres } = useGetMovieById();

  return (
    <div>
      <img
        src={
          movie.poster_path &&
          `https://image.tmdb.org/t/p/w200${movie.poster_path}`
        }
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>User score: {movie.vote_average * 10}%</p>
      <p>Overview</p>
      <p>{movie.overview}</p>
      <div>Genres</div>
      <ul>
        {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <div>Additional information</div>
      <List>
        <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
        <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
        <Outlet />
      </List>
    </div>
  );
};
