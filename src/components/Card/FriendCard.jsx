import React, { useState, useEffect } from "react";

const FriendCard = ({ id, setFriendId }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/user/${id}`);
      setUser(await response.json());
    };
    getData();
  }, [id]);

  const { name, profilePicture } = user;
  return (
    <div
      className="friend"
      onClick={() => {
        setFriendId(id);
      }}
    >
      <img src={profilePicture} alt="FriendPic" />
      <span>{name}</span>
    </div>
  );
};

export default FriendCard;
