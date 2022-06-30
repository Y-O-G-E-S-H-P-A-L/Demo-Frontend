import React, { useEffect, useState } from "react";
import "./Form.css";
import getCaptcha from "../../utils/getCaptcha";
import { Link, useNavigate } from "react-router-dom";

const SignUpFrom = () => {
  const navigate = useNavigate();
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

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    user.profilePicture = await convertBase64(file);
  };
  let name, value;
  const handelInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();

    const { name, email, contact, location, password, cPassword, profilePicture, checkbox } = user;

    if (document.getElementById("captchaCode").value === document.getElementById("captcha-box").innerHTML) {
      // if (captcha === document.getElementById("captcha-box").innerHTML) {
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
      if (data.error) {
        window.alert(data.error);
        console.log(data.error);
      } else {
        window.alert(data.message);
        console.log(data.message);
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

  return (
    <>
      <form method="POST" className="form" encType="multipart/form-data">
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
          <input type="number" name="contact" value={user.contact} onChange={handelInput} />
        </div>
        <div className="form-control">
          <div className="form-label">Location</div>
          <input type="text" name="location" value={user.location} onChange={handelInput} />
        </div>
        <div className="form-control">
          <div className="form-label">
            Password<span>*</span>
          </div>
          <input type="password" name="password" value={user.password} onChange={handelInput} required />
        </div>
        <div className="form-control">
          <div className="form-label">
            Confirm Password<span>*</span>
          </div>
          <input type="password" name="cPassword" value={user.cPassword} onChange={handelInput} required />
        </div>
        <div className="form-control">
          <div className="form-label">Profile Picture</div>
          <input type="file" name="profilePicture" onChange={uploadImage} accept="image/*" />
        </div>
        <div className="form-control ">
          <div className="form-control-captcha">
            <div className="captcha" id="captcha-box"></div>
            <input type="button" value="Refresh" className="button-captcha" onClick={getCaptcha}></input>
          </div>
          <div className="form-label">Captcha</div>
          <input type="text" name="captchaCode" className="inputCaptcha" id="captchaCode" required />
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

export default SignUpFrom;
