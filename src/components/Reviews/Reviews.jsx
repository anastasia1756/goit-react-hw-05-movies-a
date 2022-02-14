import { Text, Author } from "./Reviews.styled";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

export const Reviews = () => {
  const [{ reviews }] = useOutletContext();

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
