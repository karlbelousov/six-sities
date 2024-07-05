export type Review = {
  comment: string;
  date: string;
  rating: number;
  id: number;
  user: User;
}

export type User = {
  avatarUrl: string;
  name: string;
  isPro: boolean;
  id: number;
}
