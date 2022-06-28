import React, { useEffect, useState } from "react";
import "./Profile.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import profile from "../../images/user.jpg";

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/user/loggedInUser");
      let res = await response.json();
      setUser(res.loggedInUser);
    };
    getUser();
  }, []);
  return (
    <>
      <div className="home">
        <Header />
        <div className="profile-container">
          <img src={user.profilePicture ? user.profilePicture : profile} alt="" />
          {!user ? (
            <div className="message"> Please login first !!</div>
          ) : (
            <>
              <div className="name">{user.name}</div>
              <div className="email">{user.email}</div>
              <div className="location">{user.location}</div>
            </>
          )}
        </div>
        <Footer name={"YOGESH & JATUL"} />
      </div>
    </>
  );
};

export default Profile;
