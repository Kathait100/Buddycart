import React from "react";

const Login = () => {
  return (
    <div className="LoginModal">
      <div className="login">
        <h2 className="header">Sign In</h2>
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
          <input type="password" className="input" placeholder="123456789" />
        </div>
        <button className="search btn">Sign In</button>
      </div>
    </div>
  );
};

export default Login;
