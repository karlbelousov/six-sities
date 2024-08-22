import { createReducer } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';
import { AuthorizationStatus, CityLocation, Sorting, cities } from '../const';
import { SortName } from '../types/types';
import { fetchComments, fetchNearbyOffers, fetchOffer, fetchOffers, fetchUserStatus, loginUser, logoutUser, postComment, setCity, setError, setSorting } from './action';
import { User } from '../types/user';
import { Review } from '../types/review';

type State = {
  city: City;
  offers: Offer[];
  offer: Offer | null;
  sorting: SortName;
  error: string | null;
  isOffersLoading: boolean;
  isOfferLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User['email'];
  nearbyOffers: Offer[];
  comments: Review[];
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  offer: null,
  sorting: Sorting.Popular,
  error: null,
  isOffersLoading: false,
  isOfferLoading: false,
  authorizationStatus: AuthorizationStatus.noAuth,
  user: '',
  nearbyOffers: [],
  comments: []
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
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.noAuth;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isOfferLoading = false;
    })
    .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(postComment.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
});

export {reducer};
