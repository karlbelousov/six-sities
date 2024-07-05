import { Review } from '../../types/review';
import ReviewItem from '../review-item/review-item';
import ReviewForm from '../../components/reviews-form/review-form';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({ reviews }: ReviewListProps) {
  return (
    <section className="property__reviews reviews">
      {reviews.length > 0 && (
        <>
          <h2 className="reviews__title">
            Reviews · <span className="reviews__amount">{reviews.length}</span>
          </h2>
          <ul className="reviews__list">
            {reviews.map((review) => (
              <ReviewItem key={review.id} {...review} />
            ))}
          </ul>
        </>)}
      <ReviewForm />
    </section>
  );
}

export default ReviewList;
