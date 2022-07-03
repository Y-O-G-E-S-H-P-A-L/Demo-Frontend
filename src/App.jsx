import React, { useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import SignInForm from "./components/Form/SignInForm";
import SignUpFrom from "./components/Form/SignUpFrom";
import Requests from "./components/Requests/Requests";
import Friends from "./components/Friends/Friends";
import UserState from "./context/UserState";

const App = () => {
  const [userLogin, setUserLogin] = useState({});

  let reqPath = `/user/requests/${userLogin._id}`;
  let fndPath = `/user/friends/${userLogin._id}`;

  return (
    <div className="app">
      <UserState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home userLogin={userLogin} />} />
            <Route path={reqPath} element={<Requests userLogin={userLogin} />} />
            <Route path={fndPath} element={<Friends userLogin={userLogin} />} />
            <Route exact path="/user/register" element={<SignUpFrom />} />
            <Route exact path="/user/login" element={<SignInForm setUserLogin={setUserLogin} />} />
          </Routes>
        </BrowserRouter>
      </UserState>
    </div>
  );
};

export default App;
