import foodCart from "./context";
import { useContext } from "react";

export const ItemList = () => {
  return useContext(foodCart);
};
