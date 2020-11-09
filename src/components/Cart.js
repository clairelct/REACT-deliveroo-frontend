import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ listMeals }) => {
  return (
    <section>
      <button>Valider mon panier</button>

      <div className="cart-container">
        <div className="cart-list">
          <CartItem listMeals={listMeals} />
        </div>

        <div className="amounts">
          <p>
            Sous-total <span className="width-25-per"> 25€</span>
          </p>
          <p>
            Frais de livraison <span className="width-25-per"> 2,50€</span>
          </p>
        </div>
        <div className="total">
          <p>
            Total <span className="width-25-per"> 27,50€</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cart;
