import { useGetMovieById } from "../../hooks";

export const Reviews = () => {
  const { movie, loading, error, cast, reviews } = useGetMovieById();
  console.log(reviews);
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            Author: {review.author}
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
