import { useGetMovieById } from "hooks";

export const Reviews = () => {
  const { reviews } = useGetMovieById();
  return (
    <div>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              Author: {author}
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        "There is no review yet. Be the first one to add review to this movie!"
      )}
    </div>
  );
};
