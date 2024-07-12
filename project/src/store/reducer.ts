import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, setSorting } from './action';
import { City, Offer } from '../types/offer';
import { CityLocation, Sorting, cities } from '../const';
import { SortName } from '../types/types';

type State = {
  city: City;
  offers: Offer[];
  sorting: SortName;
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: [],
  sorting: Sorting.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocation[action.payload]
      };
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    });
});

export {reducer};
