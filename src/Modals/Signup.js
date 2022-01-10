import React from "react";
import { ItemList } from "../context/itemstate";
const Signup = () => {
  const { isLoggedIn, setIsLoggedIn } = ItemList();
  const form = document.querySelector("form");
  const emailError = document.querySelector(".email.error");
  const passwordError = document.querySelector(".password.error");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    try {
      const newSignup = await fetch("http://localhost:8000/signup", {
        method: "POST",
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
        window.location.assign("http://localhost:3000/login");
      }
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div className="SignupModal">
      <div className="signup">
        <form>
          <h2 className="header">Sign Up</h2>
          <div className="email">
            <h3 className="link label">Your Email</h3>
            <input
              type="email"
              className="input label"
              placeholder="youremail@gmail.com"
            />
            <div class="email error"></div>
          </div>
          <div className="password">
            <h3 className="link label">Password</h3>
            <input type="password" className="input" placeholder="12456" />
            <div class="password error"></div>
          </div>
          <button className="search btn">Create Account</button>
        </form>
      </div>
      <div className="signup1">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="signupbtn"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
