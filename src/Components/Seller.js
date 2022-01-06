import React from "react";
import { Link } from "react-router-dom";
import Data from "../data";
const Seller = () => {
  return (
    <div className="seller-card">
      {Data.map(
        (card) => (
          <div className="sellercard" key={card.id}>
            <div className="top">
              <img
                src={card.img}
                alt="Image1"
                width="180px"
                height="180px"
                Style="object-fit:cover"
              />
            </div>
            <div className="bottom">
              <span className="text">
                <Link to={`/explore/${card.id}`} className="sellerlink">
                  {card.id}
                </Link>
              </span>
            </div>
          </div>
        )
        // end
      )}
    </div>
    // end brackets
  );
};

export default Seller;
