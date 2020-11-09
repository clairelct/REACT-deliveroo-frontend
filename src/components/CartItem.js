import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({ listMeals }) => {
  return listMeals.map((item, index) => {
    return (
      <div key={index} className="cart-content">
        <div className="col-1">
          <div>
            <FontAwesomeIcon className="turquoise" icon="minus-square" />
            <p>1</p>
            <FontAwesomeIcon className="turquoise" icon="plus-square" />
          </div>
          <p>{item.title}</p>
        </div>
        <div className="col-2 width-25-per">{item.price}€</div>
      </div>
    );
  });
};

export default CartItem;
