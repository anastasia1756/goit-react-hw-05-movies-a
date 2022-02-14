import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../Layout";
import { Cast } from "components/Cast";
import { Reviews } from "components/Reviews";
import { useLazyLoader } from "hooks";

export const App = () => {
  const HomePage = useLazyLoader("HomePage");
  const MoviesPage = useLazyLoader("MoviesPage");
  const MovieDetailsPage = useLazyLoader("MovieDetailsPage");

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
