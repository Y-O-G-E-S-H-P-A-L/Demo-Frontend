import React, { useEffect, useState } from "react";
import "./ChatRoom.css";
import profile from "../../images/user.png";
import audio from "../../images/call.png";
import video from "../../images/video.png";

const ChatRoom = ({ friendId }) => {
  const [friend, setFriend] = useState();

  useEffect(() => {
    const getFriend = async () => {
      const res = await fetch(`/user/${friendId}`);
      setFriend(await res.json());
    };
    getFriend();
  }, [friendId]);

  const { name, profilePicture } = friend;
  return (
    <>
      <div className="chat-room">
        <div className="chat-header">
          <div>
            <img src={profilePicture ? profilePicture : profile} alt="Friend" />
            <span>{name ? name : "username"}</span>
          </div>
          <p className="call-icon">
            <img src={audio} alt="" />
            <img src={video} alt="" />
          </p>
        </div>
        <div className="chating">
          <div className="reciever">
            <span></span>
          </div>
        </div>
        <form action="" className="chat-footer">
          <input type="email" class="form-field" placeholder="Write something here" />
          <button type="button" class="btn btn-primary btn-inside uppercase">
            Send
          </button>
        </form>
      </div>
      <div>{friendId}</div>
    </>
  );
};

export default ChatRoom;
