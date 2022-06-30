import React, { useEffect, useState } from "react";
import "./Form.css";
import getCaptcha from "../../utils/getCaptcha";
import { Link, useNavigate } from "react-router-dom";

const SignInForm = ({ setUserLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    if (document.getElementById("captchaCode").value === document.getElementById("captcha-box").innerHTML) {
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

      const data = await res.json();
      if (data.error) {
        window.alert(data.error);
        console.log(data.error);
      } else {
        window.alert(data.message);
        console.log(data.message);
        setUserLogin(data.user);
        navigate("/");
      }
    } else {
      window.alert("Invalid Captcha");
      console.log("Invalid Captcha");
    }
  };
  useEffect(() => {
    getCaptcha();
  }, []);

  return (
    <>
      <div className="app">
        <form className="form" method="POST">
          <div className="left"></div>
          <div className="form-heading">Login</div>
          <div className="form-control">
            <div className="form-label">Email</div>

            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-control">
            <div className="form-label">Password</div>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-control ">
            <div className="form-control-captcha">
              <div className="captcha" id="captcha-box"></div>
              <input type="button" value="Refresh" className="button-captcha" onClick={getCaptcha}></input>
            </div>
            <div className="form-label">Captcha</div>
            <input type="text" name="captchaCode" className="inputCaptcha" id="captchaCode" required />
          </div>
          <div className="form-control form-submit-button">
            <input type="submit" value="Login" className="button" onClick={loginUser} />
          </div>
          <div className="form-control">
            <div className="form-label link">
              Don't have an account?
              <Link to="../user/register">Create an account.</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
