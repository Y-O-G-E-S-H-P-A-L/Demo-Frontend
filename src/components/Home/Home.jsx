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
      <div className="home">
        {<Header userLogin={userLogin} />}
        <div className="card-container">
          {users.map((user) => {
            if (userLogin._id !== user._id) {
              return <Card user={user} userLogin={userLogin} key={user._id} />;
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
