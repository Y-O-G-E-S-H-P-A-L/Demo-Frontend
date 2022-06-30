import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import RequestCard from "../Card/RequestCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Requests = ({ userLogin }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/user/requests");
      setUsers(await response.json());
    };
    getData();
  }, []);

  return (
    <>
      <div className="home">
        <Header userLogin={userLogin} />
        <div className="card-container">
          {users.map((user, i) => {
            if (userLogin._id !== user._id) {
              return <RequestCard user={user} userLogin={userLogin} />;
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

export default Requests;
