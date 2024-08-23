import { CityName } from '../../types/offer';


type CardListEmptyProps = {
  city: CityName;
}

function OffersListEmpty({ city }: CardListEmptyProps) {
  return(
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
      </div>
    </section>
  );
}

export default OffersListEmpty;
