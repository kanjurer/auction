import "./Auctions.css";
import { useState, useEffect } from "react";
import { IAuction } from "../../utils/interfaces";
import Auction from "./Auction";

const dummyData = [
  {
    auctionName: "what",
    auctionDescription: "warharhai a",
    auctionId: 1,
    auctionCurrentBid: 10,
    auctionImage: "image",
    auctionMinimumIncrement: 10,
    auctionCreator: "ramesh",
  },
  {
    auctionName: "what",
    auctionDescription: "warharhai a",
    auctionId: 2,
    auctionCurrentBid: 10,
    auctionImage: "image",
    auctionMinimumIncrement: 10,
    auctionCreator: "ramesh",
  },
  {
    auctionName: "what",
    auctionDescription: "warharhai a",
    auctionId: 3,
    auctionCurrentBid: 10,
    auctionImage: "image",
    auctionMinimumIncrement: 10,
    auctionCreator: "ramesh",
  },
  {
    auctionName: "what",
    auctionDescription: "warharhai a",
    auctionId: 4,
    auctionCurrentBid: 10,
    auctionImage: "image",
    auctionMinimumIncrement: 10,
    auctionCreator: "ramesh",
  },
  {
    auctionName: "what",
    auctionDescription: "warharhai a",
    auctionId: 5,
    auctionCurrentBid: 10,
    auctionImage: "image",
    auctionMinimumIncrement: 10,
    auctionCreator: "ramesh",
  },
  {
    auctionName: "what",
    auctionDescription: "warharhai a",
    auctionId: 6,
    auctionCurrentBid: 10,
    auctionImage: "image",
    auctionMinimumIncrement: 10,
    auctionCreator: "ramesh",
  },
];

function Auctions() {
  let [auctions, setAuctions] = useState<IAuction[]>(dummyData);

  useEffect(() => {
    // fetch auctions here
  }, []);

  return (
    <div className="auctions">
      {auctions?.map((auction) => {
        return <Auction auction={auction} key={auction.auctionId} />;
      })}
    </div>
  );
}

export default Auctions;
