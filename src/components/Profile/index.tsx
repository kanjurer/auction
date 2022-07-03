import "./Profile.css";

import { Divider } from "antd";
import { IUser } from "../../utils/interfaces";

interface ProfileProps {
  user: IUser;
}

function Profile({ user }: ProfileProps) {
  return (
    <div className="profile">
      <div className="user-info">{user.username}</div>
      <div></div>
      <Divider />
      <h2>User Auctions</h2>
      <section className="user-auctions">
        <div className="user-auctions-created">
          <h3>Auctions Created</h3>
        </div>

        <div className="user-auctions-bids">
          <h3>Auctions Bidded</h3>
        </div>
      </section>
    </div>
  );
}

export default Profile;
