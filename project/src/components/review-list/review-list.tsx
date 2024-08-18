import { Review } from '../../types/review';
import ReviewItem from '../review-item/review-item';
import ReviewForm from '../../components/reviews-form/review-form';
import { AuthorizationStatus } from '../../const';

type ReviewListProps = {
  reviews: Review[];
  authorisationStatus: AuthorizationStatus;
}

function ReviewList({ reviews, authorisationStatus }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <section className="property__reviews reviews">
        {authorisationStatus === AuthorizationStatus.Auth && <ReviewForm />}
      </section>
    );
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} {...review} />
        ))}
      </ul>
      {authorisationStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default ReviewList;
