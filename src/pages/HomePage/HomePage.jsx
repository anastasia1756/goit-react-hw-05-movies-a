import { useFetchMovies } from "hooks";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaGratipay } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Filter } from "components/Filter";
import {
  Title,
  List,
  Items,
  Card,
  Wrapper,
  Description,
} from "./HomePage.styled";

export const HomePage = () => {
  const { movies } = useFetchMovies();
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const base_url = "https://image.tmdb.org/t/p/w200";
  return (
    <>
      <Title>Popular movies today</Title>
      <Filter
        movies={movies}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        setFiltered={setFiltered}
      />

      <List layout>
        <AnimatePresence>
          {filtered.map(({ title, id, poster_path }) => (
            <Items key={id}>
              <Card
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to={`/movies/${id}`}>
                  <img
                    src={poster_path && `${base_url}${poster_path}`}
                    alt={title}
                  />
                  <Wrapper>
                    <FaGratipay />
                    <Description>{title}</Description>
                  </Wrapper>
                </Link>
              </Card>
            </Items>
          ))}
        </AnimatePresence>
      </List>
    </>
  );
};

HomePage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};
