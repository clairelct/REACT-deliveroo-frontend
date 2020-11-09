import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({ category, listMeals, setListMeals }) => {
  // Fonction pour ajouter un menu au panier
  const handleAddMeal = (meal) => {
    // Créer une copie, Modifier, Remplacer
    const newMeals = [...listMeals];
    newMeals.push({
      meal: meal,
      quantity: 1,
    });
    setListMeals(newMeals);
  };

  return (
    // sinon depuis data
    category.meals.map((meal, index) => {
      return (
        <div
          key={index}
          className="meal-container"
          onClick={() => handleAddMeal(meal)}
        >
          <div className="meal-infos">
            <h3>{meal.title}</h3>
            <p
              className="description"
              style={{ display: meal.description ? "block" : "none" }}
            >
              {meal.description}
            </p>
            <div className="meal-price">
              <p>{meal.price} €</p>
              <p style={{ display: meal.popular ? "block" : "none" }}>
                <FontAwesomeIcon icon="star" /> Populaire
              </p>
            </div>
          </div>
          <div
            className="meal-img"
            style={{ display: meal.picture ? "block" : "none" }}
          >
            <img src={meal.picture} alt="" />
          </div>
        </div>
      );
    })
  );
};

export default Meal;
