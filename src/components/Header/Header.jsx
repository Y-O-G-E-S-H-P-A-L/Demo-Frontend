import React, { useEffect, useState } from "react";
import "./Header.css";
import user from "../../images/user.jpg";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState();
  const [profile, setProfile] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/user/loggedInUser");
      let res = await response.json();
      if (Object.keys(res.loggedInUser).length !== 0) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setName(res.loggedInUser.name);
      setProfile(res.loggedInUser.profilePicture);
      setUserId(res.loggedInUser._id);
    };
    getUser();
  }, []);
  return (
    <header>
      <Link to="../../../../../">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>Demo App</span>
        </div>
      </Link>
      {loggedIn ? (
        <div className="tab">
          <div>
            Requests<span>3</span>
          </div>
          <div>Friends</div>
        </div>
      ) : (
        <></>
      )}
      {!loggedIn ? (
        <div className="btn">
          <Link to="../user/register">
            <button>Register</button>
          </Link>
          <Link to="../user/login">
            <button>Login</button>
          </Link>
        </div>
      ) : (
        <></>
      )}
      {loggedIn ? (
        <Link to="../user/profile">
          <div className="profile">
            <input type="hidden" name="id" value={userId} />
            <span>{name ? name : "username"}</span>
            <img src={profile ? profile : user} alt="" />
          </div>
        </Link>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
