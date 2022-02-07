import { useGetMovieById } from "../../hooks";
export const Cast = () => {
  const { movie, loading, error, cast, reviews } = useGetMovieById();

  return (
    <>
      <div>
        <ul>
          {cast.map((person) => (
            <li key={person.id}>
              <img
                src={
                  person.profile_path &&
                  `https://image.tmdb.org/t/p/w154${person.profile_path}`
                }
                alt={person.name}
              />
              <p>{person.name}</p>
              <p>{person.character}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
