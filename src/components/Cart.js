import React from "react";
import CartItem from "./CartItem";

const Cart = ({ listMeals, setListMeals }) => {
  // Créer le subtotal
  let subtotal = 0;
  listMeals.map((item) => {
    return (subtotal += item.price * item.quantity);
  });

  return (
    <section>
      <button
        className={
          listMeals.length !== 0 ? "cart-btn" : "cart-btn cart-empty-btn"
        }
      >
        Valider mon panier
      </button>

      {listMeals.length !== 0 ? (
        <div className="cart-container">
          <div className="cart-list">
            <CartItem listMeals={listMeals} setListMeals={setListMeals} />
          </div>

          <div className="amounts">
            <p>
              Sous-total{" "}
              <span className="width-25-per">
                {" "}
                {Number(subtotal).toFixed(2).replace(".", ",")} €
              </span>
            </p>
            <p>
              Frais de livraison <span className="width-25-per"> 2,50€</span>
            </p>
          </div>
          <div className="total">
            <p>
              Total{" "}
              <span className="width-25-per">
                {" "}
                {Number(subtotal + 2.5)
                  .toFixed(2)
                  .replace(".", ",")}{" "}
                €
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="cart-container cart-empty">
          <p>Votre panier est vide</p>
        </div>
      )}
      {/* <div className="cart-container">
        <div className="cart-list">
          <CartItem listMeals={listMeals} setListMeals={setListMeals} />
        </div>

        <div className="amounts">
          <p>
            Sous-total <span className="width-25-per"> {subtotal} €</span>
          </p>
          <p>
            Frais de livraison <span className="width-25-per"> 2,50€</span>
          </p>
        </div>
        <div className="total">
          <p>
            Total <span className="width-25-per"> {subtotal + 2.5} €</span>
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Cart;
