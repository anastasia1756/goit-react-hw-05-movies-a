import { useNavigate, useLocation } from "react-router-dom";
import { useGetMovieById } from "hooks";
import {
  Btn,
  CardWrapper,
  InfoWrapper,
  GenresList,
  Overview,
} from "./MovieDetailsPage.styled";
import PropTypes from "prop-types";
import { Info } from "components/Info";
import { Loader } from "components/Loader";
import { TiArrowBack } from "react-icons/ti";
import noMovie from "assets/no-movie.png";
export const MovieDetailsPage = () => {
  const {
    movie: { release_date, poster_path, title, vote_average, overview, id },
    genres,
    loading,
  } = useGetMovieById();
  const base_url = "https://image.tmdb.org/t/p/w200";
  const navigate = useNavigate();
  const location = useLocation();
  const year = release_date && release_date.slice(0, 4);
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
        <CardWrapper>
          <img
            src={poster_path ? `${base_url}${poster_path}` : noMovie}
            alt={title}
          />
          <InfoWrapper>
            <h2>
              {title}({year})
            </h2>
            <p>User score: {vote_average * 10}%</p>
            <p>Overview:</p>
            <Overview>{overview}</Overview>
            {genres.length !== 0 && (
              <>
                <div>Genres:</div>
                <GenresList>
                  {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </GenresList>
              </>
            )}
          </InfoWrapper>
        </CardWrapper>
        <Info id={id} />
      </div>
    </>
  );
};

MovieDetailsPage.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      gender: PropTypes.number,
    })
  ),
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
