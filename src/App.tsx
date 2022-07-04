import "./App.css";

import { useEffect, useState } from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import PageFooter from "./components/Footer";
import Auctions from "./components/Auctions";
import AddAuction from "./components/AddAuction";
import Profile from "./components/Profile";
import { IUser } from "./utils/interfaces";

const { Header, Content, Footer } = Layout;

const dummyUser = {
  username: "Ramandeep Singh",
  userEmail: "raman.deep.singh123@yahoo.com",
  userID: "1212121",
};

function App() {
  const [user, setUser] = useState<IUser>(dummyUser);

  useEffect(() => {
    // get user from cookie
    // use setUser to set user
  }, []);
  return (
    <div className="app">
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <NavBar user={user} />
        </Header>
        <Layout>
          <Content className="main">
            <Routes>
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home user={user} />} />
              <Route
                path="/profile"
                element={user ? <Profile user={dummyUser} /> : <LogIn />}
              />
              <Route path="/auctions" element={<Auctions />} />
              <Route
                path="/addAuction"
                element={user ? <AddAuction /> : <LogIn />}
              />
            </Routes>
          </Content>
        </Layout>
        <Footer style={{ backgroundColor: "black", color: "white" }}>
          <PageFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
