import { City, Offer } from '../types/offer';

export const city: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10
  }
};

export const offers: Offer[] = [
  {
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    rating: 4,
    price: 100,
    previewImage: 'img/apartment-01.jpg',
    isFavorite: true,
    isPremium: true,
    id: 1,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 1
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.95309666406198,
      zoom: 1
    }
  },
  {
    title: 'Wood and stone place',
    type: 'Private room',
    rating: 5,
    price: 80,
    previewImage: 'img/room.jpg',
    isFavorite: true,
    isPremium: false,
    id: 2,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude:  4.75309666406198,
        zoom: 1
      }
    },
    location: {
      latitude: 52.4909553943508,
      longitude: 4.85309666406198,
      zoom: 1
    }
  },
  {
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    rating: 2,
    price: 132,
    previewImage: 'img/apartment-02.jpg',
    isFavorite: true,
    isPremium: true,
    id: 3,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude:  4.859309666406198,
        zoom: 1
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 1
    }
  },
  {
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    rating: 4,
    price: 180,
    previewImage: 'img/apartment-03.jpg',
    isFavorite: true,
    isPremium: true,
    id: 4,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 1
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.75309666406198,
      zoom: 1
    }
  }
];
