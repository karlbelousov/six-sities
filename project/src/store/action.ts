import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/offer';
import { SortName } from '../types/types';

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_SORTING: 'sorting/set',
  ERROR_OFFERS: 'offers/error',
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setSorting = createAction<SortName>(Action.SET_SORTING);
export const setError = createAction<string | null>(Action.ERROR_OFFERS);
