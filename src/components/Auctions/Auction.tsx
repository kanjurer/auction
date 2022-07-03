import "./Auction.css";

import { Avatar, Card, Modal, InputNumber, Button, notification } from "antd";
import { useState } from "react";

import { IAuction } from "../../utils/interfaces";

const { Meta } = Card;

interface AuctionProps {
  auction: IAuction;
}

function Auction({ auction }: AuctionProps) {
  const {
    auctionName,
    auctionDescription,
    auctionCurrentBid,
    auctionCreator,
    auctionMinimumIncrement,
  } = auction;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [bidValue, setBidValue] = useState<number>(auctionCurrentBid);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const placeBid = () => {
    if (bidValue < auctionCurrentBid + auctionMinimumIncrement) return;

    // place bid here, api request
    setIsModalVisible(false);
    notification.success({
      message: "Bid placed successfully",
      description: `You placed a bid of ${bidValue} on ${auctionName}.`,
    });
  };

  return (
    <>
      <Card
        className="auction-card"
        onClick={showModal}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={auctionName}
          description={auctionDescription}
        />
      </Card>
      <Modal
        title={auctionName}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <InputNumber
            defaultValue={auctionCurrentBid}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            onChange={(e) => setBidValue(e)}
            step={auctionMinimumIncrement}
            min={auctionCurrentBid}
          />,
          <Button
            danger
            type="primary"
            disabled={bidValue < auctionCurrentBid + auctionMinimumIncrement}
            onClick={placeBid}
          >
            Place Bid
          </Button>,
        ]}
      >
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          width="100%"
        />
        <p>{auctionDescription}</p>

        <p>Auction Created By: {auctionCreator}</p>
      </Modal>
    </>
  );
}

export default Auction;
