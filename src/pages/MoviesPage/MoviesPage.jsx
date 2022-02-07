import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getSearchedMovie } from "../../services";
import { MovieDetailsPage } from "../../components/MovieDetailsPage";
export const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");

  //   useEffect(() => {
  //     async function fetchMovie() {
  //       setLoading(true);
  //       try {
  //         const query = await getSearchedMovie(value);
  //         setValue(value);
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     fetchMovie();
  //   }, [value]);

  const location = useLocation();
  let navigate = useNavigate();
  const queryString = require("query-string");

  const parsed = queryString.parse(location.search);
  console.log(parsed);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: location.pathname,
      search: `query=${value}`,
    });
    setValue("");
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};
