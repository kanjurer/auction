import "./NavBar.css";

import { Layout, Dropdown, Typography, Space, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { IUser } from "../../utils/interfaces";

interface NavBarProps {
  user: IUser;
}

function NavBar({ user }: NavBarProps) {
  const LogOut = () => {
    // logout user here
  };
  return (
    <nav className="navbar">
      <h2>Auction</h2>
      <div className="navbar-options">
        <Link to="/">Home</Link>
        <Link to="/auctions">Auctions</Link>
        <Link to="/addAuction">Add Auction</Link>
        <Dropdown
          overlay={
            <Menu>
              {user ? (
                <Link to="">
                  <Link to="/profile">
                    <Menu.Item>Profile</Menu.Item>
                  </Link>
                  <Menu.Item onClick={LogOut}>Log Out</Menu.Item>
                </Link>
              ) : (
                <>
                  <Link to="/login">
                    <Menu.Item>Log In</Menu.Item>
                  </Link>
                  <Link to="/signup">
                    <Menu.Item>Sign Up</Menu.Item>
                  </Link>
                </>
              )}
            </Menu>
          }
        >
          <Typography.Link>
            <Space>
              Options
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
      </div>
    </nav>
  );
}

export default NavBar;
