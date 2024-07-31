import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { CityName, Offer } from '../types/offer';
import { SortName } from '../types/types';
import { User, UserAuth } from '../types/user';
import { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute } from '../const';
import { saveToken } from '../services/token';
import { AppDispatch } from '../types/state';

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_SORTING: 'sorting/set',
  ERROR_OFFERS: 'offers/error',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login',
  LOGOUT_USER: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute'

};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setSorting = createAction<SortName>(Action.SET_SORTING);
export const setError = createAction<string | null>(Action.ERROR_OFFERS);
export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);

export const fetchOffers = createAsyncThunk<Offer[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_OFFERS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  });

export const fetchUserStatus = createAsyncThunk<User, undefined, { extra: AxiosInstance }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra: api }) => {
    const { data } = await api.get<User>(ApiRoute.Login);

    return data;
  });

export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, { dispatch: AppDispatch; extra: AxiosInstance}>(
  Action.LOGIN_USER,
  async ({ email, password }, {dispatch, extra: api }) => {
    const { data } = await api.post<User>(ApiRoute.Login, { email, password });
    const { token } = data;
    saveToken(token);

    dispatch(redirectToRoute(AppRoute.Main));

    return email;
  });


