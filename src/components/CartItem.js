import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({ listMeals, setListMeals }) => {
  // Fonction pour diminuer la qté. d'un item dans le panier
  const handleReduceQty = (index) => {
    // Copier, modifier, remplacer
    const newListMeals = [...listMeals];
    if (newListMeals[index].quantity > 0) {
      newListMeals[index].quantity--;
    }
    setListMeals(newListMeals);
  };
  // Fonction pour ajouter la qté. d'un item dans le panier
  const handleAddQty = (index) => {
    // Copier, modifier, remplacer
    const newListMeals = [...listMeals];
    newListMeals[index].quantity++;
    setListMeals(newListMeals);
  };
  return listMeals.map((item, index) => {
    return (
      <div key={index} className="cart-content">
        <div className="col-1">
          <div>
            <FontAwesomeIcon
              className="turquoise"
              icon="minus-square"
              onClick={() => {
                handleReduceQty(index);
              }}
            />
            <p>{item.quantity}</p>
            <FontAwesomeIcon
              className="turquoise"
              icon="plus-square"
              onClick={() => {
                handleAddQty(index);
              }}
            />
          </div>
          <p>{item.title}</p>
        </div>
        <div className="col-2 width-25-per">{item.price}€</div>
      </div>
    );
  });
};

export default CartItem;
