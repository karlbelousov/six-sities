import { createReducer } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';
import { AuthorizationStatus, CityLocation, Sorting, cities } from '../const';
import { SortName } from '../types/types';
import { fetchOffers, fetchUserStatus, loginUser, setCity, setError, setSorting } from './action';
import { User } from '../types/user';

type State = {
  city: City;
  offers: Offer[];
  sorting: SortName;
  error: string | null;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User['email'];
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  sorting: Sorting.Popular,
  error: null,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.noAuth,
  user: ''
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      };
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isOffersLoading = false;
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload.email;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.noAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
});

export {reducer};
