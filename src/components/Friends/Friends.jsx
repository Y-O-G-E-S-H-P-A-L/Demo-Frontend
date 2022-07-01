import React from "react";
import "./Friends.css";
import user from "../../images/user.png";
const Friends = () => {
  return (
    <div>
      <div className="left">
        <div className="left-title">
          <h3>Friends</h3>
        </div>
        <div className="friends">
          <div className="friends-card">
            <img src={user} alt="" />
            <span className="friend-name">username </span>
          </div>
        </div>
      </div>
      {/* <div className="right">
        <div className="right-title">Right</div>
      </div> */}
    </div>
  );
};

export default Friends;
