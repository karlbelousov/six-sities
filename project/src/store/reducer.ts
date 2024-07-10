import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action';
import { City, Offer } from '../types/offer';
import { CityLocation, cities } from '../const';

type State = {
  city: City;
  offers: Offer[];
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityLocation[cities[0]]
  },
  offers: []
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
    });
});

export {reducer};
