import { configureStore} from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { setOffers } from './action';
import { offers } from '../mocks/offers';
import { createApi } from '../services/api';

export const api = createApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

store.dispatch(setOffers(offers));
