export type Offer = {
  title: string;
  type: string;
  rating: number;
  price: number;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
  id: number;
  city: {
    name: string;
  };
}
