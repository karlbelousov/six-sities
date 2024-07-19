import { createAsyncThunk } from '@reduxjs/toolkit';
import { Action} from './action';
import { Offer } from '../types/offer';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../const';

export const fetchOffers = createAsyncThunk<Offer[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_OFFERS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  });
