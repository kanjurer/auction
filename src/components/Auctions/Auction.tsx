import "./Auction.css";

import {
  Avatar,
  Card,
  Modal,
  InputNumber,
  Button,
  notification,
  Descriptions,
} from "antd";
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
    auctionId,
    auctionImage,
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
        cover={<img alt="example" src={auctionImage} />}
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
        <img alt="example" src={auctionImage} width="100%" />
        <Descriptions title="Auction Info" layout="vertical" bordered>
          <Descriptions.Item label="Auction Name">
            {auctionName}
          </Descriptions.Item>
          <Descriptions.Item label="Auction Creator">
            {auctionCreator}
          </Descriptions.Item>
          <Descriptions.Item label="Auction ID">{auctionId}</Descriptions.Item>
          <Descriptions.Item label="Auction Current Bid">
            {auctionCurrentBid}
          </Descriptions.Item>
          <Descriptions.Item label="Auction Minimum Increment">
            {auctionMinimumIncrement}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
}

export default Auction;
