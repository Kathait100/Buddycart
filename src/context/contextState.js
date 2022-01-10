import { useState } from "react";
import foodCart from "./context";
import Data from "../data";
export const FoodState = ({ children }) => {
  const [state, setState] = useState(Data);
  const [shop, setShopItem] = useState([]);
  const [Total, setTotal] = useState(0);
  const [Bill, setBill] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <foodCart.Provider
      value={{
        state,
        setState,
        shop,
        setShopItem,
        Total,
        setTotal,
        Bill,
        setBill,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </foodCart.Provider>
  );
};
