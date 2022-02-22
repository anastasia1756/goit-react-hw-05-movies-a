import { useEffect } from "react";
import { Btn } from "./Filter.styled";

export const Filter = ({
  movies,
  setFiltered,
  activeGenre,
  setActiveGenre,
}) => {
  useEffect(() => {
    setFiltered(movies);
  }, [movies, setFiltered]);

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
      return;
    }
    const filteredMovies = movies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filteredMovies);
  }, [activeGenre, movies, setFiltered]);

  return (
    <div>
      <Btn
        onClick={() => {
          setActiveGenre(0);
        }}
        active={activeGenre === 0 ? true : false}
      >
        All
      </Btn>
      <Btn
        onClick={() => setActiveGenre(35)}
        active={activeGenre === 35 ? true : false}
      >
        Comedy
      </Btn>
      <Btn
        onClick={() => setActiveGenre(28)}
        active={activeGenre === 28 ? true : false}
      >
        Action
      </Btn>
    </div>
  );
};
