import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PushpinFilled } from "@ant-design/icons";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import "./FoodCartMenu.css";
import cartempty from "../../Assets/cartempty.png";
import Navbar from "../../Navbar/Navbar";
import Data from "../../data";
import { ItemList } from "../../context/itemstate";
import Login from "../../Modals/Login";
import Signup from "../../Modals/Signup";
// import { Product } from "../../context/product";
const CartMenu = () => {
  const {
    state,
    shop,
    setShopItem,
    setTotal,
    setBill,
    Bill,
    Total,
    isLoggedIn,
  } = ItemList();
  const [temp, setIsTemp] = useState(false);
  const [search, setSearch] = useState("");
  const [press, setPress] = useState(true);
  const { id } = useParams();
  const [height, setHeight] = useState(window.pageYOffset);
  window.onscroll = () => {
    setHeight(window.pageYOffset);
    return () => (window.onscroll = null);
  };
  // Additem
  const AddItem = (uid) => {
    let sitem = state.filter((item) =>
      item.menu.some((prod) => prod.fid === uid)
    );
    let menu = [...sitem[0].menu];
    let prod = menu.filter((item) => item.fid === uid);
    setShopItem([...shop, ...prod]);
    let local = [...shop, ...prod];
    let count = 0;
    let totalbill = 0;
    local.map((item) => (
      <div key={item.fid}>
        {(count += item.qty)}
        {(totalbill += item.dprice * item.qty)}
      </div>
    ));
    setTotal(count);
    setBill(totalbill);
  };
  // Remove item
  const RemoveItem = (uid) => {
    let sitem = shop.filter((item) => item.fid !== uid);
    setShopItem([...sitem]);
    let count = 0;
    let totalbill = 0;
    sitem.map((item) => (
      <div key={item.fid}>
        {(count += item.qty)}
        {(totalbill += item.dprice * item.qty)}
      </div>
    ));
    setTotal(count);
    setBill(totalbill);
  };
  // increase quantity
  const IncreaseQty = (uid) => {
    shop.map((item) => {
      if (item.fid === uid && item.qty <= 6) {
        return { ...item, qty: ++item.qty };
      }
      return item;
    });
    setShopItem([...shop]);
    let totalbill = 0;
    let count = 0;
    shop.map((item) => (
      <div key={item.fid}>
        {(count += item.qty)}
        {(totalbill += item.dprice * item.qty)}
      </div>
    ));
    setTotal(count);
    setBill(totalbill);
  };
  // decrease quantity
  const DecreaseQty = (uid) => {
    shop.map((item) => {
      if (item.fid === uid && item.qty > 1) {
        return { ...item, qty: --item.qty };
      }
      return item;
    });
    setShopItem([...shop]);
    console.log(shop);
    let count = 0;
    let totalbill = 0;
    shop.map((item) => (
      <div key={item.fid}>
        {(count += item.qty)}
        {(totalbill += item.dprice * item.qty)}
      </div>
    ));
    setBill(totalbill);
    setTotal(count);
  };
  // Remove Cart
  const RemoveCart = (uid) => {
    let count = 0;
    let totalbill = 0;
    let reset = shop.filter((item) => item.fid === uid);
    reset[0].qty = 1;
    let CartItem = shop.filter((item) => item.fid !== uid);
    CartItem.map((item) => (
      <div key={item.fid}>
        {(count += item.qty)}
        {(totalbill += item.dprice * item.qty)}
      </div>
    ));
    setShopItem([...CartItem]);
    setBill(totalbill);
    setTotal(count);
  };

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
          <div className={temp ? "menu menu1" : "menu"}>
            {search.length === 0 ? (
              item.menu.map((card) => (
                <div className="frame">
                  <div className="card">
                    <div className="top">
                      <img src={card.fimg} className="dishcard" alt="Image1" />
                    </div>
                    <div className="bottom">
                      <span className="text">
                        <del className="deleted-rate">${card.price}</del>$
                        {card.dprice}
                        <span className="offer">
                          {((card.price - card.dprice) / card.price) * 100}% OFF
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
                    {shop.some((prod) => prod.fid === card.fid) ? (
                      <button
                        onClick={() => RemoveItem(card.fid)}
                        className="child2"
                      >
                        <span>Remove</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => AddItem(card.fid)}
                        className="child2"
                      >
                        <span>Add</span>
                      </button>
                    )}
                  </span>
                </div>
              ))
            ) : //  partition 1
            item.menu.filter((prod) =>
                prod.food.toLowerCase().includes(search.toLowerCase())
              ).length === 0 ? (
              <div className="dishnotavailable">
                <h2>Search For {search}!Not Availaible</h2>
              </div>
            ) : (
              item.menu
                .filter((prod) =>
                  prod.food.toLowerCase().includes(search.toLowerCase())
                )
                .map((card) => (
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
                    <span className="child3">
                      <button
                        onClick={() => setPress(!press)}
                        className="child2"
                      >
                        {press === true ? (
                          <span>Adds</span>
                        ) : (
                          <span>added</span>
                        )}
                      </button>
                    </span>
                  </div>
                ))
            )}
          </div>
          {/* Add to food - cart */}
          <div className="addtocart">
            {shop.length === 0 ? (
              <div>
                <div className="top-section">
                  <h2 className="sub-heading">Cart Empty</h2>
                  <img src={cartempty} alt="Image1" width="50%" />
                </div>
                <div className="cart-qoute">
                  <span>Lorem ipsum is a placeholder text.</span>
                </div>
              </div>
            ) : (
              <div className="addtocart1">
                <h2>Cart</h2>
                <h4>{Total} ITEMS</h4>
                {shop.map((item) => (
                  <div key={item.fid} className="cartitems">
                    <span className="item-name">{item.food}</span>
                    <br />
                    <button
                      onClick={() => IncreaseQty(item.fid)}
                      className="btn"
                    >
                      +
                    </button>
                    <span className="qty">{item.qty}</span>
                    <button
                      onClick={() => DecreaseQty(item.fid)}
                      className="btn"
                    >
                      -
                    </button>
                    <span className="intotal">x {item.qty}</span>
                    <span className="intotal">$ {item.qty * item.dprice}</span>
                    {/* <br /> */}
                    <button
                      onClick={() => RemoveCart(item.fid)}
                      className="cancel"
                    >
                      X
                    </button>
                  </div>
                ))}
                <span className="subtotal">SubTotal: ${Bill}</span>
                <br />
                <button
                  onClick={
                    // alert("Payment Gateway") isLoggedIn, setIsLoggedIn temp, setIsTemp
                    () => setIsTemp(!temp)
                  }
                  className="payment"
                >
                  CHECKOUT
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
      <div
        className={temp ? "bg" : "normal"}
        onClick={() => setIsTemp(!temp)}
      ></div>
      {/* onClick={() => setIsLoggedIn(!isLoggedIn)} */}
      {temp && (isLoggedIn ? <Signup /> : <Login />)}
      {}
    </div>
  );
};

export default CartMenu;
