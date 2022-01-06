import React, { useState } from "react";
import "./Explore.css";
import location from "../../Assets/location.png";
import Navbar from "../../Navbar/Navbar";
import Seller from "../../Components/Seller";
import Data from "../../data";
const Explore = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="Explore">
      <Navbar />
      <div className="title">
        <div className="name">
          <span id="explore">Explore</span>
          <span id="around">Around</span>
          <img src={location} width="20px" alt="Image2" />
        </div>
        <hr width="30px" height="2px" color="#656565" />
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type To Find..."
            className="input"
          />
          <button className="search">Search</button>
        </div>
      </div>

      <div id="category-list">
        <h2 className="category-title">Food Truck</h2>
        <div className="AddCartById">
          {search.length === 0 ? (
            <Seller />
          ) : Data.filter((prod) =>
              prod.id.toLowerCase().includes(search.toLowerCase())
            ).length === 0 ? (
            <div className="notfound">
              <h1 className="notavailtext">Seller {search}!Not Availaible</h1>
            </div>
          ) : (
            <div className="seller-card">
              {Data.filter((prod) =>
                prod.id.toLowerCase().includes(search.toLowerCase())
              ).map((card) => (
                <Seller />
              ))}
            </div>
          )}
          ;
        </div>
      </div>
    </div>
  );
};

export default Explore;
