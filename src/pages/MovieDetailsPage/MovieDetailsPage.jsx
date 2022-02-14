import { useNavigate, useLocation } from "react-router-dom";
import { useGetMovieById } from "hooks";
import {
  Btn,
  CardWrapper,
  InfoWrapper,
  GenresList,
  Overview,
  About,
  Genres,
  Votes,
  OverviewWrapper,
  Poster,
  Title,
} from "./MovieDetailsPage.styled";
import PropTypes from "prop-types";
import { Info } from "components/Info";
import { Loader } from "components/Loader";
import { TiArrowBack } from "react-icons/ti";
import noMovie from "assets/no-movie.png";
import ReactTypingEffect from "react-typing-effect";

export const MovieDetailsPage = () => {
  const {
    movie: { release_date, poster_path, title, vote_average, overview, id },
    genres,
    loading,
    cast,
    reviews,
  } = useGetMovieById();
  const base_url = "https://image.tmdb.org/t/p/w200";
  const navigate = useNavigate();
  const location = useLocation();

  const year = release_date && release_date.slice(0, 4);
  const onBackBtnClick = () => {
    navigate(location?.state?.from?.location ?? "/") ||
      navigate(
        location?.state?.from?.location ??
          location?.state?.from?.state?.from?.location ??
          "/"
      );
  };

  return (
    <>
      {loading && <Loader />}
      {id && (
        <div>
          <Btn onClick={onBackBtnClick}>
            <TiArrowBack />
            {location?.state?.from?.label ?? "Go back home"}
          </Btn>
          <CardWrapper>
            <Poster
              src={poster_path ? `${base_url}${poster_path}` : noMovie}
              alt={title}
            />
            <InfoWrapper>
              <Title>
                {title}({year})
              </Title>
              <p>
                User score: <Votes>{vote_average * 10}%</Votes>
              </p>
              <OverviewWrapper>
                <About>Overview:</About>

                {overview && (
                  <Overview>
                    <ReactTypingEffect
                      typingDelay={1000}
                      speed={20}
                      text={overview}
                    />
                  </Overview>
                )}
              </OverviewWrapper>
              {genres.length !== 0 && (
                <>
                  <Genres>Genres:</Genres>
                  <GenresList>
                    {genres.map(({ id, name }) => (
                      <li key={id}>{name}</li>
                    ))}
                  </GenresList>
                </>
              )}
            </InfoWrapper>
          </CardWrapper>
          <Info id={id} cast={cast} reviews={reviews} />
        </div>
      )}
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
