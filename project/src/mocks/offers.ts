import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    rating: 4,
    price: 100,
    previewImage: 'img/apartment-01.jpg',
    isFavorite: true,
    isPremium: true,
  },
  {
    title: 'Wood and stone place',
    type: 'Private room',
    rating: 5,
    price: 80,
    previewImage: 'img/room.jpg',
    isFavorite: false,
    isPremium: false,

  },
  {
    title: '>Canal View Prinsengracht',
    type: 'Apartment',
    rating: 2,
    price: 132,
    previewImage: 'img/apartment-02.jpg',
    isFavorite: true,
    isPremium: true,
  },
  {
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    rating: 4,
    price: 180,
    previewImage: 'img/apartment-03.jpg',
    isFavorite: false,
    isPremium: true,
  }
];