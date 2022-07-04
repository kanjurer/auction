import "./Profile.css";

import { useEffect, useState } from "react";
import { Button, Card, Col, Divider, Image, Row, Space, Statistic } from "antd";

import { IUser, IAuction } from "../../utils/interfaces";

interface ProfileProps {
  user: IUser;
}

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
];

function Profile({ user }: ProfileProps) {
  const { username, userEmail } = user;
  const [auctionsCreated, setAuctionsCreated] = useState<IAuction[]>([]);
  const [auctionsBidded, setAuctionsBidded] = useState<IAuction[]>([]);

  useEffect(() => {
    // fetch auctionsCreated and auctionsBidded here

    setAuctionsBidded(dummyData);
    setAuctionsCreated(dummyData);
  }, []);

  return (
    <div className="profile">
      <div className="user-info">
        <Image
          src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
          width="300px"
        />

        <div style={{ margin: "40px 50px 40px 40px" }}>
          <h2>
            <b>{username}</b>
          </h2>
          <h3>{userEmail}</h3>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="Bids Made" value={auctionsBidded.length} />
            </Col>
            <Col span={12}>
              <Statistic
                title="Auctions Created"
                value={auctionsCreated.length}
              />
            </Col>
          </Row>
        </div>
      </div>
      <div></div>
      <Divider />
      <h2>User Auctions</h2>
      <section className="user-auctions">
        <div className="user-auctions-created">
          <h3>Auctions Created</h3>
          {auctionsCreated?.map((auction) => {
            return (
              <Card
                className="auction-card"
                title={<b>{auction.auctionName}</b>}
                bordered={false}
              >
                {auction.auctionName}
              </Card>
            );
          })}
        </div>

        <div className="user-auctions-bids">
          <h3>Auctions Bidded</h3>
          {auctionsBidded?.map((auction) => {
            return (
              <Card
                className="auction-card"
                title={<b>{auction.auctionName}</b>}
                bordered={false}
              >
                {auction.auctionName}
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Profile;
