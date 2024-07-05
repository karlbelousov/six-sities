import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import RoomPage from '../../pages/room-page/room-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/privat-route';
import { City, Offer } from '../../types/offer';
import { Review } from '../../types/review';


type AppProps = {
  offers: Offer[];
  city: City;
  reviews: Review[];
}

function App({offers, city, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={ <MainPage offers={offers} city={city} />}
        />
        <Route
          path={AppRoute.login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<RoomPage reviews={reviews} city={city} nearbyOffers={offers} />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
