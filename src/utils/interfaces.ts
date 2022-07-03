export interface IAuction {
  auctionName: string;
  auctionDescription: string;
  auctionId: number;
  auctionCurrentBid: number;
  auctionImage: string;
  auctionMinimumIncrement: number;
  auctionCreator: string;
}

export interface IUser {
  username: string;
  userID: string;
  userEmail: string;
}
