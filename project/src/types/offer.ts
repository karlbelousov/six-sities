import { cities } from "../const";

export type Offer = {
  title: string;
  type: string;
  rating: number;
  price: number;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
  id: number;
  city: City;
  location: Location;
  bedrooms: number;
  description: string;
  goods: [string];
  host: Host;
  images: [string];
  maxAdults: number;

}

export type CityName = typeof cities[number];

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: CityName;
  location: Location;
}

export type Host = {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
}
