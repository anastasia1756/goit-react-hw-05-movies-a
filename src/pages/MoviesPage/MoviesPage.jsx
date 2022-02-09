import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, Wrapper } from "./MoviesPage.styled";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { getSearchedMovie } from "services";
import { Loader } from "components/Loader";
import toast, { Toaster } from "react-hot-toast";
import { MdLocalMovies } from "react-icons/md";

// import bg from "assets/bg.jpg";
export const MoviesPage = () => {
  const { register, handleSubmit, resetField } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const location = useLocation();
  const navigate = useNavigate();
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
          toast.error("There is no movie with this title");
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("query", {
            required: true,
          })}
          placeholder="Type any movie"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <Loader />}
      {movies && (
        <>
          <div>
            {movies.map(({ id, title }) => (
              <div>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: { location, label: "Back to movies" } }}
                  key={id}
                >
                  <MdLocalMovies />
                  {title}
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
      <Toaster />
    </Wrapper>
  );
};
