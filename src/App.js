import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/user/register" element={<SignUpPage />} />
          <Route exact path="/user/login" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
