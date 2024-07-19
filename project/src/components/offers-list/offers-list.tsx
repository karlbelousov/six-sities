import { useState } from 'react';
import OfferCard from '../../components/offer-card/offer-card';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import SortingList from '../sorting-list/sorting-list';
import { SortName } from '../../types/types';
import { setSorting } from '../../store/action';
import { Comparator } from '../../const';
import Spinner from '../spinner/spinner';

function OffersList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector((state) => state.sorting);
  const activeCity = useAppSelector((state) => state.city);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const offers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city.name).sort(Comparator[state.sorting]));
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleOfferCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleOfferCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const onSortingChange = (name: SortName) => {
    dispatch(setSorting(name));
  };

  if (isOffersLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} places to stay in Amsterdam
        </b>
        <SortingList onChange={onSortingChange} activeSorting={activeSorting} />
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
          locations={offers.map(({ id, location }) => ({id, ...location}))}
          activeOffer={activeOffer}
        />
      </div>
    </>
  );
}

export default OffersList;
