import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import RequestCard from "../Card/RequestCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import EmptyCard from "../Card/EmptyCard";

const Requests = ({ userLogin }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/user/requests/${userLogin._id}`);
      setRequests(await response.json());
    };
    getData();
  }, [userLogin]);

  return (
    <>
      <Header userLogin={userLogin} />
      <div className="home">
        <div className="card-container">
          {requests.length ? (
            requests.map((id) => {
              return <RequestCard userLogin={userLogin} key={id} id={id} />;
            })
          ) : (
            <EmptyCard />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Requests;
