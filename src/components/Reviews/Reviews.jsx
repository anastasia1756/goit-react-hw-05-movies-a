import { useGetMovieById } from "hooks";
import { Text, Author } from "./Reviews.styled";
import PropTypes from "prop-types";

export const Reviews = () => {
  const { reviews } = useGetMovieById();
  const reviewsInfo = reviews.length !== 0;
  return (
    <div>
      {reviewsInfo ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Author>Author:</Author> {author}
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

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
