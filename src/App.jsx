import React, { useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import SignInForm from "./components/Form/SignInForm";
import SignUpFrom from "./components/Form/SignUpFrom";
import Requests from "./components/Requests/Requests";

const App = () => {
  const [userLogin, setUserLogin] = useState({});
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home userLogin={userLogin} />} />
          <Route path="/requests" element={<Requests userLogin={userLogin} />} />
          <Route exact path="/user/register" element={<SignUpFrom />} />
          <Route exact path="/user/login" element={<SignInForm setUserLogin={setUserLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
