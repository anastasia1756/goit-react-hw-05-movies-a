import { useGetMovieById } from "hooks";
import { Text } from "./Reviews.styled";
export const Reviews = () => {
  const { reviews } = useGetMovieById();
  return (
    <div>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              Author: {author}
              <hr />
              <Text>{content}</Text>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        "There is no review yet. Be the first one to add review to this movie!"
      )}
    </div>
  );
};
