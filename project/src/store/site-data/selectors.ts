import type { State } from '../../types/state';
import { Comparator, StoreSlice } from '../../const';
import { Review } from '../../types/review';
import { Offer } from '../../types/offer';
import { getCity, getSorting } from '../site-process/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const getIsOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isOffersLoading;
export const getOffers = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Offer[] => SITE_DATA.offers;

export const selectOffers = createSelector(
  [getOffers, getCity, getSorting],
  (offers, city, sorting) => offers.filter((offer) => offer.city.name === city.name).sort(Comparator[sorting])
);

export const getIsOfferLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isOfferLoading;
export const getOffer = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer | null => SITE_DATA.offer;

export const getNearbyOffers = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer[] => SITE_DATA.nearbyOffers;
export const getComments = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Review[] => SITE_DATA.comments;

export const getIsFavoriteOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isFavoriteOffersLoading;
export const getFavoriteOffers = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Offer[] => SITE_DATA.favoriteOffers;
