import { createReducer } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';
import { CityLocation, Sorting, cities } from '../const';
import { SortName } from '../types/types';
import {setCity, setError, setSorting } from './action';
import { fetchOffers } from './api-action';

type State = {
  city: City;
  offers: Offer[];
  sorting: SortName;
  error: string | null;
  isOffersLoading: boolean;
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  sorting: Sorting.Popular,
  error: null,
  isOffersLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      };
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
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
