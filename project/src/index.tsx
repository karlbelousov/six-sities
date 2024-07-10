import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { offers, city } from './mocks/offers';
import { reviews } from './mocks/review';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        city={city}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
