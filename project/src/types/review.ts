import { User } from './user';

export type Review = {
  comment: string;
  date: string;
  rating: number;
  id: number;
  user: User;
}
