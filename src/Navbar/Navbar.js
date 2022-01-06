import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useParams } from "react-router-dom";
const Navbar = () => {
  const { id } = useParams();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);

  return (
    <div id="Navbar">
      <h2 id="logo">
        <span id="buddy">Buddy</span>
        <span id="cart">Cart.in</span>
      </h2>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/home" className={path === "/home" ? "active" : "link"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={path === "/dashboard" ? "active" : "link "}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/explore"
              className={
                path === "/explore" || path === `/explore/cart${id}`
                  ? "active"
                  : "link "
              }
            >
              Explore
            </Link>
          </li>
          <li>
            <Link to="/about" className={path === "/about" ? "active" : "link"}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
