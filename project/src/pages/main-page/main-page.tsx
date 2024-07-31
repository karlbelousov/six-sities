import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';

function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
