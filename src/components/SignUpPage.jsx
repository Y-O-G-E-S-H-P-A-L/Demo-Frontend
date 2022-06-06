import React from "react";

const SignUpPage = () => {
  return (
    <>
      <form className="signup">
        <div className="form-heading">SignUp Form</div>
        {/* <div className="form-control">
            <div className="form-label">Profile Picture</div>
            <input type="file" name="image" accept="image/*" />
          </div> */}
        <div className="form-control">
          <div className="form-label">Name</div>
          <input type="text" name="name" required />
        </div>
        <div className="form-control">
          <div className="form-label">Email</div>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <div className="form-label">Contact Number</div>
          <input type="tel" name="contactNumber" />
        </div>
        {/* <div className="form-control">
            <div className="form-label">Location</div>
            <input type="email" name="location" />
          </div> */}
        <div className="form-control">
          <div className="form-label">Captcha Code</div>
          <div className="captcha"></div>
          <input type="button" className="refresh"></input>
          <input type="text" name="captchaCode" required />
        </div>
        <div className="form-control">
          <label className="container-check-box">
            <input type="checkbox" />
            Accept Terms and Conditions.
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="form-control form-control-button">
          <input type="submit" value="SignUp" className="button" />
        </div>
      </form>
    </>
  );
};

export default SignUpPage;
