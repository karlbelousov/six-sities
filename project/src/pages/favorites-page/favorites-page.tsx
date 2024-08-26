import OfferCard from '../../components/offer-card/offer-card';
import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers, getIsFavoriteOffersLoading} from '../../store/site-data/selectors';
import Spinner from '../../components/spinner/spinner';
import Header from '../../components/header/header';

function FavoritesPage(): JSX.Element {
  const isFavoriteOffersLoading = useAppSelector(getIsFavoriteOffersLoading);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const groupedOffersByCity = favoriteOffers.reduce<{ [key: string]: Offer[] }>((acc, curr) => {
    if (curr.isFavorite) {
      const city = curr.city.name;

      if(!(city in acc)) {
        acc[city] = [];
      }

      acc[city].push(curr);
    }

    return acc;
  }, {});

  if (isFavoriteOffersLoading) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(groupedOffersByCity).map(([city, groupedOffers]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="/">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {groupedOffers.map((offer) => (
                      <OfferCard key={offer.id} {...offer} place='favorites' />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
