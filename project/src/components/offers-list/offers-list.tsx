import { useState } from 'react';
import OfferCard from '../../components/offer-card/offer-card';
import { Offer } from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleOfferCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleOfferCardMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          {...offer}
          onMouseMove={handleOfferCardMouseMove}
          onMouseLeave={handleOfferCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default OffersList;
