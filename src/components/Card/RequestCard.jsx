import React from "react";
import "./Card.css";
import profile from "../../images/icon.png";

const RequestCard = ({ user, userLogin, id }) => {
  const getDetails = async () => {
    console.log(`/user/${id}`);
    const res = await fetch(`/user/${id}`);
    const u = await res.json();
    console.log(user);
  };
  getDetails();
  console.log(user);

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
      <input type="hidden" name="id" id="id" value={user._id} />
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
