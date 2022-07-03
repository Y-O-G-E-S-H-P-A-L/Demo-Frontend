import React, { useEffect, useState } from "react";
import "./Friends.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FriendCard from "../Card/FriendCard";
import EmptyCard from "../Card/EmptyCard";
import ChatRoom from "../ChatRoom/ChatRoom";

const Friends = ({ userLogin }) => {
  const [friends, setFriends] = useState([]);
  const [friendId, setFriendId] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/user/friends/${userLogin._id}`);
      setFriends(await response.json());
    };
    getData();
  }, [userLogin]);
  return (
    <>
      <Header userLogin={userLogin} />
      <div className="home">
        <div className="friends-container">
          <div className="left">
            {friends.length ? (
              friends.map((id) => {
                return <FriendCard id={id} setFriendId={setFriendId} key={id} />;
              })
            ) : (
              <EmptyCard />
            )}
          </div>
          <div className="right">
            <ChatRoom friendId={friendId} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Friends;
