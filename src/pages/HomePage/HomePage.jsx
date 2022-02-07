import { useFetchMovies } from "hooks";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { movies, loading, error } = useFetchMovies();

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
