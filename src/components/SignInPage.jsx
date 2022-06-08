import React, { useEffect } from "react";
import getCaptcha from "../utils/getCaptcha";

const SignInPage = () => {
  useEffect(() => {
    getCaptcha();
  }, []);
  return (
    <>
      <form className="signup" method="post">
        <div className="form-heading">SignIn Form</div>
        <div className="form-control">
          <div className="form-label">Email</div>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <div className="form-label">Password</div>
          <input type="password" name="password" />
        </div>
        <div className="form-control ">
          <div className="form-control-captcha">
            <div className="captcha" id="captcha-box"></div>
            <input type="button" value="Refresh" className="button-captcha" onClick={getCaptcha}></input>
          </div>
          <div className="form-label">Captcha</div>
          <input type="text" name="captchaCode" className="inputCaptcha" required />
        </div>
        <div className="form-control form-submit-button">
          <input type="submit" value="Log in" className="button" />
        </div>

        <div className="form-control">
          <div className="form-label link">
            Don't have an account?
            <a href="./">Sign up.</a>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignInPage;
