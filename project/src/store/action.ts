import { createAction } from '@reduxjs/toolkit';
import { CityName, Offer } from '../types/offer';
import { SortName } from '../types/types';

export const setCity = createAction<CityName>('city/set');
export const setOffers = createAction<Offer[]>('offers/set');
export const setSorting = createAction<SortName>('sorting/set');
