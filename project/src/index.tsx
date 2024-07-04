import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { offers, city } from './mocks/offers';
import { reviews } from './mocks/review';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      city={city}
      reviews={reviews}
    />
  </React.StrictMode>,
);
