import "./App.css";

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

const { Header, Sider, Content, Footer } = Layout;

const dummyUser = {
  username: "awada",
  userEmail: "Asdadas",
  userID: "1212121",
};

function App() {
  return (
    <Layout>
      <Header style={{ backgroundColor: "white" }}>
        <NavBar user="" />
      </Header>
      <Layout>
        <Content>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile user={dummyUser} />} />

            <Route path="/auctions" element={<Auctions />} />
            <Route path="/addAuction" element={<AddAuction />} />
          </Routes>
        </Content>
      </Layout>
      <Footer style={{ backgroundColor: "black", color: "white" }}>
        <PageFooter />
      </Footer>
    </Layout>
  );
}

export default App;
