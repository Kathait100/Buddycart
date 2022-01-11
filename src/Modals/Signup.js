import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import { ItemList } from "../context/itemstate";
const Signup = () => {
  // const { isLoggedIn, setIsLoggedIn } = ItemList();
  const Signupform = () => {
    const form = document.querySelector("form");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      try {
        const newSignup = await fetch("https://authrestapi1.herokuapp.com/signup", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await newSignup.json();
        console.log(data);
        console.log(data.error);
        if (data.error) {
          if (data.error === "Duplicate Entry!Please Check And Try Again!") {
            emailError.textContent = data.error;
            emailError.style.color = "red";
          } else {
            emailError.textContent = data.error.email;
            emailError.style.color = "red";
            passwordError.textContent = data.error.password;
            passwordError.style.color = "red";
          }
        }
        if (!data.error) {
          window.location.assign("/login");
        }
      } catch (error) {
        console.log(error);
      }
    });
  };
  return (
    <div>
      <Navbar />
      <div className="SignupModal">
        <div className="signup">
          <form>
            <h2 className="header">Sign Up</h2>
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
                className="input"
                name="password"
                placeholder="12456"
              />
              <div className="password error"></div>
            </div>
            <button className="search btn" onClick={() => Signupform()}>
              Create Account
            </button>
          </form>
        </div>
        <div className="signup1">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
