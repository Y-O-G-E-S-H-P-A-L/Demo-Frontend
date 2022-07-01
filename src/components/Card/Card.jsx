import React from "react";
import "./Card.css";
import profile from "../../images/user.png";

const Card = ({ user, userLogin }) => {
  let { name, email, location, profilePicture } = user;
  if (!profilePicture) {
    profilePicture = profile;
  }
  if (!location) {
    location = "Not available";
  }
  const letsConnect = async (id) => {
    if (Object.keys(userLogin).length !== 0) {
      if (document.getElementById(`${id}`).innerText !== "Withdraw") {
        const res = await fetch(`/user/sendRequest/${user._id}`, {
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
          document.getElementById(`${id}`).innerText = "Withdraw";
        }
      } else {
        const res = await fetch(`/user/rejectRequest/${user._id}`, {
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
          document.getElementById(`${id}`).innerText = "Send Request";
        }
      }
    } else {
      window.alert("Please login first !!");
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
      <div>
        <button id={`${user._id}`} onClick={() => letsConnect(user._id)}>
          Send Request
        </button>
      </div>
    </div>
  );
};

export default Card;
