import "./Home.css";

import { Button, Typography } from "antd";
import { RadarChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { IUser } from "../../utils/interfaces";

interface HomeProps {
  user: IUser;
}

function Home({ user }: HomeProps) {
  return (
    <div className="home">
      <Typography.Title style={{ fontSize: "100px" }}>
        Auction Me
      </Typography.Title>
      <Typography.Title level={3}>
        Probably the best auction portal out there.
      </Typography.Title>

      <Link to={user ? "/auctions" : "/login"}>
        <Button
          size="large"
          style={{
            backgroundImage: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
            width: "50%",
            margin: "100px 50px",
            fontSize: "50px",
            height: "100px",
            padding: "10px",
          }}
          shape="round"
          icon={<RadarChartOutlined />}
        >
          Start Auctioning
        </Button>
      </Link>
    </div>
  );
}

export default Home;
