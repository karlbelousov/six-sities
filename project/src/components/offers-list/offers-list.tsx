import OfferCard from '../../components/offer-card/offer-card';
import { Offer } from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <OfferCard key={offer.title} {...offer} />
      )}
    </div>
  );
}

export default OffersList;