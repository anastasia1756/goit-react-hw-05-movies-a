import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, Wrapper, Input, Button, Form } from "./MoviesPage.styled";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { getSearchedMovie } from "services";
import { Loader } from "components/Loader";
import toast, { Toaster } from "react-hot-toast";
import { MdLocalMovies } from "react-icons/md";
import { FcSearch } from "react-icons/fc";

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
          <div>
            {movies.map(({ id, title }) => (
              <div key={id}>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: { location, label: "Back to movies" } }}
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
