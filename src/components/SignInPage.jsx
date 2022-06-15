import React, { useEffect, useState } from "react";
import getCaptcha from "../utils/getCaptcha";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import verifyCaptcha from "../utils/verifyCaptcha";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Please fill all feilds !!");
    } else {
      window.alert("Login successfully.");
      navigate("/");
    }
  };
  useEffect(() => {
    getCaptcha();
  }, []);

  return (
    <>
      <div className="app">
        <form className="signup" method="POST">
          <div className="form-heading">Sign In</div>

          <div className="form-control">
            <div className="form-label">Email</div>

            <input type="email" name="email" placeholder="Enter email" required value={email} onChange={(e) => setemail(e.target.value)} />
          </div>

          <div className="form-control">
            <div className="form-label">Password</div>
            <input type="password" name="password" placeholder="Enter password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-control ">
            <div className="form-control-captcha">
              <div className="captcha" id="captcha-box"></div>
              <input type="button" value="Refresh" className="button-captcha"></input>
            </div>
            <div className="form-label">Captcha</div>
            <input type="text" name="captchaCode" className="inputCaptcha" id="captcha" required />
          </div>
          <div className="form-control form-submit-button">
            <input
              type="submit"
              value="Log in"
              className="button"
              onClick={() => {
                if (verifyCaptcha()) {
                  userLogin();
                }
              }}
            />
          </div>
          <div className="form-control">
            <div className="form-label link">
              Don't have an account?
              <Link to="../SignUpPage">Create an account.</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInPage;
