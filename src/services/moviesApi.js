import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "24fc9cceb1d95b4e3f465d49d65644f0";
export const getMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const getMovie = async (id) => {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits,reviews,images`
  );
  return response.data;
};
export const getSearchedMovie = async (movie) => {
  const response = await axios.get(
    `/search/${movie}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false