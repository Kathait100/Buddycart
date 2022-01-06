import React from "react";

const Signup = () => {
  return (
    <div className="SignupModal">
      <div className="signup">
        <h2 className="header">Sign Up</h2>
        <div className="email">
          <h3 className="link label">Your Email</h3>
          <input
            type="email"
            className="input label"
            placeholder="youremail@gmail.com"
          />
        </div>
        <div className="password">
          <h3 className="link label">Password</h3>
          <input type="password" className="input" placeholder="12456" />
        </div>
        <button className="search btn">Create Account</button>
      </div>
    </div>
  );
};

export default Signup;
