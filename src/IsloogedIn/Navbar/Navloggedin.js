import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navloggedin.css";

const Navloggedin = () => {
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);
  return (
    <div id="LoggedInNav">
      <h2>
        <span>Buddy</span>
        <span>Cart.in</span>
      </h2>
      <nav>
        <ul>
          <li>
            <Link to="/home" className={path === "/home" ? "active" : "link"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/my-buddies"
              className={
                path === "/my-buddies" ||
                path === "/add-buddy-cart" ||
                path === "/add-buddy-cart/cart1"
                  ? "active"
                  : "link"
              }
            >
              My Buddies
            </Link>
            {console.log(path)}
          </li>
          <li>
            <Link
              to="/explore"
              className={path === "/explore" ? "active" : "link "}
            >
              Explore
            </Link>
          </li>

          <img
            src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="profile"
            className="profileimage"
          />
        </ul>
      </nav>
    </div>
  );
};

export default Navloggedin;
