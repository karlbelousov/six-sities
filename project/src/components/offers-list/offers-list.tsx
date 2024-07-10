import { useState } from 'react';
import OfferCard from '../../components/offer-card/offer-card';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';

function OffersList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city.name));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleOfferCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleOfferCardMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} places to stay in Amsterdam
        </b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width={7} height={4}>
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>
              Popular
            </li>
            <li className="places__option" tabIndex={0}>
              Price: low to high
            </li>
            <li className="places__option" tabIndex={0}>
              Price: high to low
            </li>
            <li className="places__option" tabIndex={0}>
              Top rated first
            </li>
          </ul>
        </form>
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
      </section>
      <div className="cities__right-section">
        <Map
          city={activeCity}
          locations={offers.map((offer) => offer.city.location)}
        />
      </div>
    </>
  );
}

export default OffersList;
