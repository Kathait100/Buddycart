import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PushpinFilled } from "@ant-design/icons";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import "./FoodCartMenu.css";
import cartempty from "../../Assets/cartempty.png";
import Navbar from "../../Navbar/Navbar";
import Data from "../../data";
const CartMenu = () => {
  const [search, setSearch] = useState('');
  const [press, setPress] = useState(true);
  const { id } = useParams();
  const [height, setHeight] = useState(window.pageYOffset);
  window.onscroll = () => {
    setHeight(window.pageYOffset);
    return () => (window.onscroll = null);
  };
  // console.log(search);
  return (
    <div>
      <Navbar />
      <div
        id="searchBar"
        style={height >= 5 ? { display: "none" } : { display: "block" }}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type To Find..."
          id="input"
        />
        <button id="search">Search</button>
      </div>
      {Data.filter((card) => card.id === id).map((item) => (
        <div className="cart">
          {/* Seller Card */}
          <div className="cartInfo">
            <div className="cart-card">
              <div className="topimage">
                <img src={item.cover} alt="Image1" className="cover" />
                <div>
                  <img src={item.profile} className="circleicon" alt="Image1" />
                </div>
              </div>
              <div className="bottom-section">
                <h2 className="header center">Hunger Point</h2>
              </div>
              <div className="cart-location">
                <PushpinFilled style={{ fontSize: "13px", color: "#e36039" }} />{" "}
                <span className="location-name">{item.location}</span>
                <div className="cart-location-rating">
                  <StarFilled style={{ fontSize: "13px", color: "#e36039" }} />
                  <StarFilled style={{ fontSize: "13px", color: "#e36039" }} />
                  <StarFilled style={{ fontSize: "13px", color: "#e36039" }} />
                  <StarOutlined
                    style={{ fontSize: "13px", color: "#e36039" }}
                  />
                  <StarOutlined
                    style={{ fontSize: "13px", color: "#e36039" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Menu start */}
          <div className="menu">
            {search.length === 0
              ? item.menu.map((card) => (
                  <div className="frame">
                    <div className="card">
                      <div className="top">
                        <img
                          src={card.fimg}
                          className="dishcard"
                          alt="Image1"
                        />
                      </div>
                      <div className="bottom">
                        <span className="text">
                          <del className="deleted-rate">${card.price}</del>$
                          {card.dprice}
                          <span className="offer">
                            {((card.price - card.dprice) / card.price) * 100}%
                            OFF
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="productDesc">
                      <div lassName="child1">
                        <h2 className="header">{card.food}</h2>
                        <h3 className="sub-heading">Detail</h3>
                        <span className="detail-text">{card.desc}</span>
                      </div>
                    </div>
                    <span>
                      <span>
                      <button onClick = {() => setPress(!press)} className="child2">
                       {press === true?<span>Adds</span>:<span>added</span>} 
                      </button>
                      </span>
                      
                     
                    </span>
                  </div>
                ))
              : //  partition 1
                item.menu
                  .filter((prod) =>
                    prod.food.toLowerCase().includes(search.toLowerCase())
                  ).length === 0?(<div className = "dishnotavailable">
              <h2>Search For {search}!Not Availaible</h2>
            </div>):(item.menu
                  .filter((prod) =>
                    prod.food.toLowerCase().includes(search.toLowerCase())
                  ).map((card) => (
                    <div className="frame">
                      <div className="card">
                        <div className="top">
                          <img
                            src={card.fimg}
                            className="dishcard"
                            alt="Image1"
                          />
                        </div>
                        <div className="bottom">
                          <span className="text">
                            <del className="deleted-rate">${card.price}</del>$
                            {card.dprice}
                            <span className="offer">
                              {((card.price - card.dprice) / card.price) * 100}%
                              OFF
                            </span>
                          </span>
                        </div>
                      </div>
                      {/*  */}
                      <div className="productDesc">
                        <div lassName="child1">
                          <h2 className="header">{card.food}</h2>
                          <h3 className="sub-heading">Detail</h3>
                          <span className="detail-text">{card.desc}</span>
                        </div>
                      </div>
                        <button className="child2">
                          <span>Add</span>
                        </button>
                      
                    </div>)
                  ))}
          </div>
          {/* Add to food - cart */}
          <div className="addtocart">
            <div className="top-section">
              <h2 className="sub-heading">Cart Empty</h2>
              <img src={cartempty} alt="Image1" width="50%" />
            </div>
            <div className="cart-qoute">
              <span>Lorem ipsum is a placeholder text.</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartMenu;
