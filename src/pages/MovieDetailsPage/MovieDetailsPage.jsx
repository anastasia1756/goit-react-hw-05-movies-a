import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useGetMovieById } from "hooks";
import { Btn, Link, List } from "./MovieDetailsPage.styled";
import { Loader } from "components/Loader";
import { TiArrowBack } from "react-icons/ti";

export const MovieDetailsPage = () => {
  const {
    movie: { poster_path, title, vote_average, overview, id },
    genres,
    loading,
  } = useGetMovieById();

  const base_url = "https://image.tmdb.org/t/p/w200";
  const navigate = useNavigate();
  const location = useLocation();

  const onBackBtnClick = () => {
    navigate(location?.state?.from?.location ?? "/");
  };

  return (
    <>
      {loading && <Loader />}
      <div>
        <Btn onClick={onBackBtnClick}>
          <TiArrowBack />
          {location?.state?.from?.label ?? "Go back home"}
        </Btn>
        <img src={poster_path && `${base_url}${poster_path}`} alt={title} />
        <h2>{title}</h2>
        <p>User score: {vote_average * 10}%</p>
        <p>Overview</p>
        <p>{overview}</p>
        <div>Genres</div>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <div>Additional information</div>
        <List>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          <Outlet />
        </List>
      </div>
    </>
  );
};
