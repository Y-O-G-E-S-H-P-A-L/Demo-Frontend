import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/user");
      setUsers(await response.json());
    };
    getData();
    const getUser = async () => {
      const response = await fetch("/user/loggedInUser");
      let data = await response.json();
      setUserId(data.loggedInUser._id);
    };
    getUser();
  }, []);

  return (
    <>
      <div className="home">
        <Header />
        <div className="card-container">
          {users.map((user) => {
            if (userId !== user._id) {
              return <Card name={user.name} image={user.profilePicture} location={user.location} email={user.email} key={user._id} />;
            } else {
              return <></>;
            }
          })}
        </div>
        <Footer name={"YOGESH & JATUL"} />
      </div>
    </>
  );
};

export default Home;
