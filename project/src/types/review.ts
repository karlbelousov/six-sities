export type Review = {
  comment: string,
  date: string,
  rating: number,
  user: User
}

export type User = {
  avatarUrl: string,
  name: string,
  isPro: boolean
}
