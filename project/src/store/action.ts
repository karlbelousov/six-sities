import { createAction } from '@reduxjs/toolkit';
import { CityName, Offer } from '../types/offer';

export const setCity = createAction<CityName>('city/set');
export const setOffers = createAction<Offer[]>('offers/set');
