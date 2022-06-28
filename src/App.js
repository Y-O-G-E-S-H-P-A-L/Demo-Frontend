import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import SignInForm from "./components/Form/SignInForm";
import SignUpFrom from "./components/Form/SignUpFrom";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/user/register" element={<SignUpFrom />} />
          <Route exact path="/user/login" element={<SignInForm />} />
          <Route exact path="/user/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
