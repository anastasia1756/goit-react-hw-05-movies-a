import { useEffect, useState } from "react";
import { getMovie } from "services/moviesApi";
import { useParams } from "react-router-dom";

export const useGetMovieById = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const movie = await getMovie(movieId);
        setMovie(movie);
        setCast(movie.credits.cast);
        setReviews(movie.reviews.results);
        setGenres(movie.genres);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  return { movie, loading, error, cast, reviews, genres };
};
