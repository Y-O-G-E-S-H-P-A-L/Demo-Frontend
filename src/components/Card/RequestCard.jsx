import React, { useState, useEffect } from "react";
import "./Card.css";
import profile from "../../images/user.png";

const RequestCard = ({ userLogin, id }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/user/${id}`);
      setUser(await response.json());
    };
    getData();
  }, [id]);

  let { name, email, location, profilePicture } = user;
  if (!profilePicture) {
    profilePicture = profile;
  }
  if (!location) {
    location = "Not available";
  }

  const acceptRequest = async (id) => {
    const res = await fetch(`/user/acceptRequest/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userLogin._id,
      }),
    });
    const data = await res.json();
    if (data.error) {
      window.alert(data.error);
      console.log(data.error);
    } else {
      window.alert(data.message);
      console.log(data.message);
    }
  };
  const rejectRequest = async (id) => {
    const res = await fetch(`/user/rejectRequest/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userLogin._id,
      }),
    });
    const data = await res.json();
    if (data.error) {
      window.alert(data.error);
      console.log(data.error);
    } else {
      window.alert(data.message);
      console.log(data.message);
    }
  };
  return (
    <div className="card">
      <div className="image">
        <img src={profilePicture} alt="UserProfile" />
      </div>
      <div className="name">Name : {name}</div>
      <div className="description">Email : {email}</div>
      <div className="description">Location : {location}</div>
      <div className="requestBtns">
        <button className="request" onClick={() => acceptRequest(user._id)}>
          Accept
        </button>
        <button className="request" onClick={() => rejectRequest(user._id)}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
