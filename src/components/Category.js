import React from "react";
import Meal from "./Meal";

const Category = ({ data, listMeals, setListMeals }) => {
  return data.categories.map((category, index) => {
    // Affiche que les catégories qui ont des plats à proposer
    if (category.meals.length !== 0) {
      return (
        <section key={index}>
          <h2>{category.name}</h2>
          <div className="meals-container">
            <Meal
              category={category}
              listMeals={listMeals}
              setListMeals={setListMeals}
            />
          </div>
        </section>
      );
    }
  });
};

export default Category;
