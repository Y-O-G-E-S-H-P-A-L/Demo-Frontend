import React, { useEffect, useState, navigator } from "react";
import getCaptcha from "../utils/getCaptcha";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState();

  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    password: "",
    cPassword: "",
    profilePicture: "",
    checkbox: "",
  });

  let name, value;
  const handelInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();

    const { name, email, contact, location, password, cPassword, profilePicture, checkbox } = user;
    if (captcha === document.getElementById("captcha-box").innerHTML) {
      const res = await fetch("/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          contact,
          location,
          password,
          cPassword,
          profilePicture,
          checkbox,
        }),
      });

      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Registration Successfull");
        console.log("Registration Successfull");
        navigate("/user/login");
      }
    } else {
      window.alert("Invalid Captcha");
      console.log("Invalid Captcha");
    }
  };

  useEffect(() => {
    getCaptcha();
  }, []);

  // ADD geo location
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
      <form method="POST" className="signup" encType="multipart/form-data">
        <div className="form-heading">Create an Account</div>
        <div className="form-control">
          <div className="form-label">
            Name<span>*</span>
          </div>
          <input type="text" name="name" value={user.name} onChange={handelInput} required />
        </div>
        <div className="form-control">
          <div className="form-label">
            Email<span>*</span>
          </div>
          <input type="email" name="email" value={user.email} onChange={handelInput} required />
        </div>
        <div className="form-control">
          <div className="form-label">Contact Number</div>
          <input type="number" name="contact" value={user.contact} onChange={handelInput} required />
        </div>
        <div className="form-control" onClick={getLocation}>
          <div className="form-label">Location</div>
          <input type="text" name="location" id="demo" />
        </div>
        <div className="form-control">
          <div className="form-label">Password</div>
          <input type="password" name="password" value={user.password} onChange={handelInput} />
        </div>
        <div className="form-control">
          <div className="form-label">Confirm Password</div>
          <input type="password" name="cPassword" value={user.cPassword} onChange={handelInput} />
        </div>
        <div className="form-control">
          <div className="form-label">Profile Picture</div>
          <input type="file" name="profilePicture" value={user.profilePicture} onChange={handelInput} accept="image/*" />
        </div>
        <div className="form-control ">
          <div className="form-control-captcha">
            <div className="captcha" id="captcha-box"></div>
            <input type="button" value="Refresh" className="button-captcha" onClick={getCaptcha}></input>
          </div>
          <div className="form-label">Captcha</div>
          <input
            type="text"
            name="captchaCode"
            value={captcha}
            onChange={(e) => {
              setCaptcha(e.target.value);
            }}
            className="inputCaptcha"
            id="captcha"
            required
          />
        </div>
        <div className="form-control">
          <label className="container-check-box">
            <input type="checkbox" value={user.checkbox} name="checkbox" required />
            Accept Terms and Conditions.<span>*</span>
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="form-control form-submit-button">
          <input type="submit" value="register" className="button" onClick={postData} />
        </div>
        <div className="form-control">
          <div className="form-label link">
            Already have an account?
            <Link to="../user/login"> Login</Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpPage;
