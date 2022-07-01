import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = ({ userLogin }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/user");
      setUsers(await response.json());
    };
    getData();
  }, []);

  return (
    <>
      {<Header userLogin={userLogin} />}
      <div className="home">
        <div className="card-container">
          {users.map((user) => {
            // if (users.length < 5) {
            if (userLogin._id !== user._id) {
              return <Card user={user} userLogin={userLogin} key={user._id} />;
            } else {
              return <></>;
            }
            // } else {
            // return <></>;
            // }
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
