import React, { useEffect, useState } from "react";
import "./ChatRoom.css";
import profile from "../../images/user.png";

const ChatRoom = ({ friendId }) => {
  const [friend, setFriend] = useState();

  useEffect(() => {
    const getFriend = async () => {
      const res = await fetch(`/user/${friendId}`);
      setFriend(await res.json());
    };
    getFriend();
  }, [friendId]);
  console.log("ch ", friendId);
  console.log(friend);

  const { name, profilePicture } = friend;
  return (
    <>
      <div className="chat-room">
        <div className="chat-header">
          <div>
            <img src={profilePicture ? profilePicture : profile} alt="Friend" />
            <span>{name ? name : "username"}</span>
          </div>
          <div>
            <span className="audio"></span>
            <span className="video"></span>
          </div>
        </div>
        <div className="chating">Chats</div>
        <div className="chat-footer">Footer</div>
      </div>
    </>
  );
};

export default ChatRoom;
