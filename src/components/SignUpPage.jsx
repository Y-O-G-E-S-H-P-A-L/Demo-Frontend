import React, { useEffect } from "react";
import getCaptcha from "../utils/getCaptcha";

const SignUpPage = () => {
  useEffect(() => {
    getCaptcha();
  }, []);
  let x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerText = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    x.value = position.coords.latitude + "," + position.coords.longitude;
    console.log(lat, long);
    console.log(position);
  }
  return (
    <>
      <form className="signup" method="post">
        <div className="form-heading">Create an Account</div>
        <div className="form-control">
          <div className="form-label">Profile Picture</div>
          <input type="file" name="image" accept="image/*" />
        </div>
        <div className="form-control">
          <div className="form-label">
            Name<span>*</span>
          </div>
          <input type="text" name="name" required />
        </div>
        <div className="form-control">
          <div className="form-label">
            Email<span>*</span>
          </div>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <div className="form-label">Contact Number</div>
          <input type="tel" name="contactNumber" />
        </div>
        <div className="form-control" onClick={getLocation}>
          <div className="form-label">Location</div>
          <input type="text" name="location" id="demo" />
        </div>
        <div className="form-control">
          <div className="form-label">Password</div>
          <input type="password" name="password" />
        </div>
        <div className="form-control">
          <div className="form-label">Confirm Password</div>
          <input type="password" name="confirmPassword" />
        </div>
        <div className="form-control ">
          <div className="form-control-captcha">
            <div className="captcha" id="captcha-box"></div>
            <input type="button" value="Refresh" className="button-captcha" onClick={getCaptcha}></input>
          </div>
          <div className="form-label">
            Captcha<span>*</span>
          </div>
          <input type="text" name="captchaCode" className="inputCaptcha" required />
        </div>
        <div className="form-control">
          <label className="container-check-box">
            <input type="checkbox" name="acceptTandC" />
            Accept Terms and Conditions.<span>*</span>
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="form-control form-submit-button">
          <input type="submit" value="Register" className="button" />
        </div>
        <div className="form-control">
          <div className="form-label link">
            Already have an account?
            <a href="./" className="form-label">
              Sign in.
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpPage;
