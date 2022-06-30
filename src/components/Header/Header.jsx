import React, { useEffect, useState } from "react";
import "./Header.css";
import user from "../../images/user.jpg";
import logo from "../../images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ userLogin }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  let login = false;
  if (Object.keys(userLogin).length !== 0) {
    login = true;
  }
  useEffect(() => {
    if (Object.keys(userLogin).length !== 0) {
      setCount(userLogin.requests.length);
    }
  }, [userLogin]);
  const getFriends = () => {
    navigate(`/user/friends/${userLogin._id}`);
  };

  const getRequests = () => {
    navigate(`/user/requests/${userLogin._id}`);
  };

  return (
    <header>
      <Link to="../../../../../">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>Demo App</span>
        </div>
      </Link>
      {login ? (
        <div className="tab">
          <div onClick={getRequests}>
            Requests<span>{count}</span>
          </div>
          <div onClick={getFriends}>Friends</div>
        </div>
      ) : (
        <></>
      )}
      {!login ? (
        <div className="btn">
          <Link to="/user/register">
            <button>Register</button>
          </Link>
          <Link to="../user/login">
            <button>Login</button>
          </Link>
        </div>
      ) : (
        <></>
      )}
      {login ? (
        <Link to="../../">
          <div className="profile">
            <span>{userLogin.name ? userLogin.name : "username"}</span>
            <img src={userLogin.profilePicture ? userLogin.profilePicture : user} alt="" />
          </div>
        </Link>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
