import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  const [state, setState] = useState({});

  return <UserContext.Provider value={state}>{props.children}</UserContext.Provider>;
};

export default UserState;
