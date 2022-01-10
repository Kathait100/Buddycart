import "./Login.css";

import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Login = () => {
  const Loggedin = () => {
    const form = document.querySelector("form");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = form.email.value;
      const password = form.password.value;
      try {
        const newSignup = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await newSignup.json();
        if (data.error) {
          emailError.textContent = data.error.email;
          emailError.style.color = "red";
          passwordError.textContent = data.error.password;
          passwordError.style.color = "red";
        }
        if (!data.error) {
          alert("Payment Successfull");
          window.location.assign("/home");
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };
  return (
    <div>
      <Navbar />
      <div className="LoginModal">
        <form>
          <div className="login">
            <h2 className="header">Sign In</h2>
            <div className="email">
              <h3 className="link label">Your Email</h3>
              <input
                type="email"
                name="email"
                className="input label"
                placeholder="youremail@gmail.com"
              />
              <div className="email error"></div>
            </div>
            <div className="password">
              <h3 className="link label">Password</h3>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="123456789"
              />
              <div className="password error"></div>
            </div>
            <button className="search btn" onClick={() => Loggedin()}>
              Sign In
            </button>
          </div>
        </form>
        <div className="signup1">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
