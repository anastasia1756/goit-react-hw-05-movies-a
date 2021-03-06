import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Link,
  Wrapper,
  Input,
  Button,
  Form,
  Img,
  LinkWrapper,
} from "./MoviesPage.styled";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { getSearchedMovie } from "services";
import { Loader } from "components/Loader";
import toast, { Toaster } from "react-hot-toast";
import { MdLocalMovies } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import PropTypes from "prop-types";

export const MoviesPage = () => {
  const { register, handleSubmit, resetField } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const location = useLocation();
  const navigate = useNavigate();
  const base_url = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        if (!query) {
          return;
        }
        const searchedQuery = await getSearchedMovie(query);
        setMovies(searchedQuery);
        if (searchedQuery.length === 0) {
          toast("There is no movie with this title", {
            icon: "🙅‍♀️",
          });
          return;
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [query]);

  const onSubmit = (data) => {
    setSearchParams(data.query);

    navigate({
      pathname: location.pathname,
      search: `query=${data.query}`,
    });

    resetField("query");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("query", {
            required: true,
          })}
          placeholder="Type any movie"
        />
        <Button type="submit">
          <FcSearch />
        </Button>
      </Form>
      {loading && <Loader />}
      {movies && (
        <>
          <LinkWrapper>
            {movies.map(({ id, title, poster_path }) => (
              <div key={id}>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: { location, label: "Back to movies" } }}
                >
                  <MdLocalMovies />
                  {title}
                  {poster_path && (
                    <Img>
                      <img src={`${base_url}${poster_path}`} alt={title} />
                    </Img>
                  )}
                </Link>
              </div>
            ))}
          </LinkWrapper>
        </>
      )}
      <Toaster />
    </Wrapper>
  );
};

MoviesPage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};
