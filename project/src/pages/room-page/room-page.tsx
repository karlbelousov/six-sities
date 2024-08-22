import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchComments, fetchNearbyOffers, fetchOffer, postComment } from '../../store/action';
import Header from '../../components/header/header';
import { getStarsWidth } from '../../utils';
import Map from '../../components/map/map';
import OfferCard from '../../components/offer-card/offer-card';
import ReviewList from '../../components/review-list/review-list';
import { ReviewAuth } from '../../types/review';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getComments, getIsOfferLoading, getNearbyOffers, getOffer } from '../../store/site-data/selectors';

function RoomPage(): JSX.Element | null {
  const params = useParams();
  const dispatch = useAppDispatch();
  const authorisationStatus = useAppSelector(getAuthorizationStatus);
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const offer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const comments = useAppSelector(getComments);

  useEffect(() => {
    const { id } = params;
    if (id) {
      const parsedId = Number(id);
      dispatch(fetchOffer(parsedId));
      dispatch(fetchComments(parsedId));
      dispatch(fetchNearbyOffers(parsedId));
    }
  }, [params, dispatch]);

  if (!offer) {
    return null;
  }

  if (isOfferLoading) {
    <Spinner />;
  }

  const {
    id,
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    city,
    location
  } = offer;

  const locations = nearbyOffers.map(({ id: nearbyId, location: nearbyLocation, }) => ({ id: nearbyId, ...nearbyLocation }));
  locations.push({ id, ...location });

  const onFormSubmit = (formData: Omit<ReviewAuth, 'id'>) => {
    dispatch(postComment({ id, ...formData }));
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img
                    className="property__image"
                    src={image}
                    alt={title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: getStarsWidth(rating) }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                {goods.length > 0 && (
                  <ul className="property__inside-list">
                    {goods.map((good) => (
                      <li key={good} className="property__inside-item">
                        {good}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width={74}
                      height={74}
                      alt={host.name}
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewList reviews={comments} authorisationStatus={authorisationStatus} onSubmit={onFormSubmit} />
            </div>
          </div>
          <Map city={city} locations={locations} activeOffer={id} place='property' />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((nearbyOffer) => (
                <OfferCard key={nearbyOffer.id} {...nearbyOffer} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomPage;
