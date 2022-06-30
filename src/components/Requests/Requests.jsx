import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import RequestCard from "../Card/RequestCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Requests = ({ userLogin }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/user/requests/${userLogin._id}`);
      setRequests(await response.json());
    };
    getData();
  }, [userLogin]);

  // const getUserDetail = async (id) => {
  //   const res = await fetch(`/user/${id}`);
  //   const singleUser = await res.json();
  //   return singleUser;
  // };

  return (
    <>
      <div className="home">
        <Header userLogin={userLogin} />
        <div className="card-container">
          {requests.map((id) => {
            // const user = getUserDetail(id);
            return <RequestCard id={id} userLogin={userLogin} key={id} />;
          })}
        </div>
        <Footer name={"YOGESH & JATUL"} />
      </div>
    </>
  );
};

export default Requests;
